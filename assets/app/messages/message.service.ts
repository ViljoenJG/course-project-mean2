import {Message} from "./message";
export class MessageService {
    messages: Message[] = [];

    addMessage(message: Message) {
        this.messages.push(message);
        console.log(this.messages);
    }

    getMessages() {
        return this.messages;
    }

    editMessage(message: Message) {
        this.messages[this.messages.indexOf(message)] = new Message('Edited', null, 'Kobus')
    }

    deleteMessage(message: Message) {
        this.messages.splice(this.messages.indexOf(message), 1);
    }
}