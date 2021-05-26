
const app = new Vue ({
    el: '#app',

    data: {
        profileImg: './assets/img/avatar',

        contactActive: 0,

        newMessage: '',

        search: '',

        messageActive: -1,

        contacts: [
            {
                name: 'Michele',
                avatar: '_1',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Ricordati di dargli da mangiare',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        text: 'Tutto fatto!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Fabio',
                avatar: '_2',
                visible: true,
                messages: [
                    {
                        date: '20/03/2020 16:30:00',
                        text: 'Ciao come stai?',
                        status: 'sent'
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        text: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent'
                    }
                ],
            },
            {
                name: 'Samuele',
                avatar: '_3',
                visible: true,
                messages: [
                    {
                        date: '28/03/2020 10:10:40',
                        text: 'La Marianna va in campagna',
                        status: 'received'
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        text: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        text: 'Ah scusa!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Luisa',
                avatar: '_4',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    }
                ],
            },
        ],

    },

    methods: {
        
        /** 
         * ## Contact active
         * 
         * selects the index of the cliked contact and reset message active
         * 
         * @param {number} index 
         */
        selectContactActive(index){
            this.contactActive = index
            this.messageActive = -1
        },

        /** 
         * ## Send new message
         * 
         * add new send message from a input text in contacts.messages, 
         * and after 1s add new default receive message in contacts.messages  
         */
        sendNewMessage(){
            this.contacts[this.contactActive].messages.push({
                date: dayjs().format('DD/MM/YYYY HH:mm:ss'),
                text: this.newMessage,
                status: 'sent'
            });
            this.newMessage = ''

            setTimeout(()=>{
                this.contacts[this.contactActive].messages.push({
                    date: dayjs().format('DD/MM/YYYY HH:mm:ss'),
                    text: '😎 👍🏻',
                    status: 'received'
                });
            }, 1000)
        },

        /**
         * ## Search contacts
         * 
         * filters the contacts in the list, 
         * and show only the contacts that name contains the text typed in the input text
         */
        searchContacts(){
            this.contacts.forEach((contact) => {
                if (contact.name.toLowerCase().includes(this.search.toLowerCase())){
                    contact.visible = true
                }else {
                    contact.visible = false
                }
            })
            
        },

        /**
         * ## Select message active
         * 
         * selects the index of the cliked message, 
         * resets index=-1 when the message is clicked again
         * 
         * @param {number} index 
         */
        selectMessagetActive(index){
            if(index == this.messageActive){
                this.messageActive = -1
            } else{
                this.messageActive = index
            }
        },

        /**
         * ## Delete message
         * 
         * Deletes a select message
         * 
         * @param {number} index 
         */
        deleteMessage(index){
            this.contacts[this.contactActive].messages.splice(index, 1)
            this.messageActive = -1
        }
       
    },

})