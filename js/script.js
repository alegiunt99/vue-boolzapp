console.log('OK js!')

/*
Milestone 1
● Replica della grafica con la possibilità di avere messaggi scritti dall’utente (verdi) e
dall’interlocutore (bianco) assegnando due classi CSS diverse
● Visualizzazione dinamica della lista contatti: tramite la direttiva v-for, visualizzare
nome e immagine di ogni contatto


Milestone 2
● Visualizzazione dinamica dei messaggi: tramite la direttiva v-for, visualizzare tutti i
messaggi relativi al contatto attivo all’interno del pannello della conversazione
● Click sul contatto mostra la conversazione del contatto cliccato


Milestone 3
● Aggiunta di un messaggio: l’utente scrive un testo nella parte bassa e digitando
“enter” il testo viene aggiunto al thread sopra, come messaggio verde
● Risposta dall’interlocutore: ad ogni inserimento di un messaggio, l’utente riceverà
un “ok” come risposta, che apparirà dopo 1 secondo.


Milestone 4
● Ricerca utenti: scrivendo qualcosa nell’input a sinistra, vengono visualizzati solo i
contatti il cui nome contiene le lettere inserite (es, Marco, Matteo Martina -> Scrivo
“mar” rimangono solo Marco e Martina)


 */

const app = new Vue({

    el: '.whatsapp-container',

    data: {
        
        // creo l'array con tutti gli utenti e i valori a loro associati
        contacts: [
            {
                name: 'Michele',
                avatar: '_1',
                visible: true,
                messages: [
                    {
                        date: '15:30',
                        message: 'Hai portato a spasso il cane?',
                        status: 'sent',
                        infoMexOpen: false,
                    },
                    {
                        date: '15:50',
                        message: 'Ricordati di stendere i panni',
                        status: 'sent',
                        infoMexOpen: false,
                    },
                    {
                        date: '16:15',
                        message: 'Tutto fatto!',
                        status: 'received',
                        infoMexOpen: false,
                    }
                ],
            },
            {
                name: 'Fabio',
                avatar: '_2',
                visible: true,
                messages: [
                    {
                        date: '16:30',
                        message: 'Ciao come stai?',
                        status: 'sent',
                        infoMexOpen: false,
                    },
                    {
                        date: '16:30',
                        message: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received',
                        infoMexOpen: false,
                    },
                    {
                        date: '16:35',
                        message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent',
                        infoMexOpen: false,
                    }
                ],
            },
            {
                name: 'Samuele',
                avatar: '_3',
                visible: true,
                messages: [
                    {
                        date: '10:10',
                        message: 'La Marianna va in campagna',
                        status: 'received',
                        infoMexOpen: false,
                    },
                    {
                        date: '10:20',
                        message: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent',
                        infoMexOpen: false,
                    },
                    {
                        date: '16:15',
                        message: 'Ah scusa!',
                        status: 'received',
                        infoMexOpen: false,
                    }
                ],
            },
            {
                name: 'Alessandro B.',
                avatar: '_4',
                visible: true,
                messages: [
                    {
                        date: '15:30',
                        message: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent',
                        infoMexOpen: false,
                    },
                    {
                        date: '15:50',
                        message: 'Si, ma preferirei andare al cinema',
                        status: 'received',
                        infoMexOpen: false,
                    }
                ],
            },
            {
                name: 'Alessandro L.',
                avatar: '_5',
                visible: true,
                messages: [
                    {
                        date: '15:30',
                        message: 'Ricordati di chiamare la nonna',
                        status: 'sent',
                        infoMexOpen: false,
                    },
                    {
                        date: '15:50',
                        message: 'Va bene, stasera la sento',
                        status: 'received',
                        infoMexOpen: false,
                    }
                ],
            },
            {
                name: 'Claudia',
                avatar: '_6',
                visible: true,
                messages: [
                    {
                        date: '15:30',
                        message: 'Ciao Claudia, hai novità?',
                        status: 'sent',
                        infoMexOpen: false,
                    },
                    {
                        date: '15:50',
                        message: 'Non ancora',
                        status: 'received',
                        infoMexOpen: false,
                    },
                    {
                        date: '15:51',
                        message: 'Nessuna nuova, buona nuova',
                        status: 'sent',
                        infoMexOpen: false,
                    }
                ],
            },
            {
                name: 'Federico',
                avatar: '_7',
                visible: true,
                messages: [
                    {
                        date: '15:30',
                        message: 'Fai gli auguri a Martina che è il suo compleanno!',
                        status: 'sent',
                        infoMexOpen: false,
                    },
                    {
                        date: '15:50',
                        message: 'Grazie per avermelo ricordato, le scrivo subito!',
                        status: 'received',
                        infoMexOpen: false,
                    }
                ],
            },
            {
                name: 'Davide',
                avatar: '_8',
                visible: true,
                messages: [
                    {
                        date: '15:30',
                        message: 'Ciao, andiamo a mangiare la pizza stasera?',
                        status: 'received',
                        infoMexOpen: false,
                    },
                    {
                        date: '15:50',
                        message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                        status: 'sent',
                        infoMexOpen: false,
                    },
                    {
                        date: '15:51',
                        message: 'OK!!',
                        status: 'received',
                        infoMexOpen: false,
                    }
                ],
            }
        ],

        // creo una chiave d'appoggio per il messaggio nuovo che scrivo nell'input
        newMessage: '',

        // una chiave che mi collega l'elemento dell'array all'html
        selectedContact: 0,

        // creo una chiave d'appoggio per la ricerca del contatto che scrivo nell'input
        searchContact: '',

    },


    // creo i metodi
    methods: {

        // creo una funzione che colleghi il selectedContract con l'indice del v-for
        selectContact(index) {
            
            this.selectedContact = index;

        },

        // una funzione che permette di prendere l'ultimo elemento dell'array messages
        getLastMessage(contact){

            const messages = contact.messages;

            const lastMessage = messages[messages.length - 1].message;

            return lastMessage;

        },

        // una funzione che permette di prendere l'orario dell'ultimo messaggio
        getLastTimeMex(contact) {
            const messages = contact.messages;

            const lastMessageTime = messages[messages.length - 1].date;

            return lastMessageTime;
        },

        getStatusMex(contact){

            const messages = contact.messages;

            const lastMessageStatus = messages[messages.length - 1].status;

            return lastMessageStatus;
        },

        //creo una funzione che seleziona divide i messaggi in inviati e ricevuti
        sentOrRecived(message){

            if (message.status === 'sent') {

                return 'bg-send-mex'

            } else (message.status === 'recived'); {

                return 'bg-recived-mex'
            
            }
        },


        //creo una funzione che genera l'orario seguente con 2 cifre sia per le ore che per i secondi
        createNowTime(){

            const d = new Date();

            let hours = d.getHours();

            if (hours < 10) {
                
                hours = '0' + hours
            }

            let minutes = d.getMinutes();

            if (minutes < 10) {
                
                minutes = '0' + minutes
            }

            return `${hours}:${minutes}`;
        },


        // creo un timer che aggiunge un messaggio di risposta al click
        messageAnswer() {
            
            const messageAnswerObject = {
                
                date: this.createNowTime(),
    
                message: 'ok',
    
                status: 'recived',
            }

            const answerHello = setTimeout(() =>
            {
                this.contacts[this.selectedContact].messages.push(messageAnswerObject)
             },
            1000)

            return answerHello;
        },


        // creo una funzione che aggiunge il messaggio scritto sull'input all'array dei messagg
        addNewMessage() { 

            // creo una variabile che permette di accettare stringhe senza spazi
            const newMessage = this.newMessage.trim();

            // creo l'oggetto da aggiungere all'array messaggi
            const messageObject = {

                date: this.createNowTime(),
    
                message: newMessage,
    
                status: 'sent',
            }

            // creo una condizione che permette di aggiungere il messaggio solo se contiene almeno un carattere
            if (messageObject.message.length > 0){

                // aggiungo l'oggetto all'array
                this.contacts[this.selectedContact].messages.push(messageObject)

                // faccio partire il timer con il messaggio di risposta
                this.messageAnswer()

                // una volta inviato, il valore dell'input si azzera
                this.newMessage = '';

            }
            

        },
        
        ricercaUtente() {

            

            const searchBar = this.searchContact.toLowerCase();

            for (let i = 0; i < this.contacts.length; i++) {

                const names = this.contacts[i].name.toLowerCase();

                if (names.includes(searchBar)) {

                    this.contacts[i].visible = true;
                }
                else {
                    
                    this.contacts[i].visible = false;
                }

            }
            
        },

        openMexInfo(message){

            message.infoMexOpen = !message.infoMexOpen;

            console.log(message.infoMexOpen)
        },

        deleteMessage(index) {
           
            this.contacts[this.selectedContact].messages.splice(index, 1);

            if (this.contacts[this.selectedContact].messages.length === 0) {
                
                this.contacts[this.selectedContact].messages = [];

            }
            console.log("l'array numbers è lungo:", this.contacts[this.selectedContact].messages.length)

        }

    },
    

})