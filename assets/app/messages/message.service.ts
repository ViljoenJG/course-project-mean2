import {Message} from "./message";
import {Http, Headers} from "@angular/http";
import {Injectable, EventEmitter} from "@angular/core";
import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable'

@Injectable()
export class MessageService {
    messages: Message[] = [];
    messageIsEdit = new EventEmitter<Message>();

    constructor(private _http: Http) {}

    addMessage(message: Message) {
        const body = JSON.stringify(message);
        const headers = new Headers({'Content-Type': 'application/json'});
        return this._http.post('http://localhost:3000/message', body, {headers: headers})
            .map(response => {
                const data = response.json().obj;
                let message = new Message(data.content, data._id, 'Dummy', null);
                return message;
            })
            .catch(error => Observable.throw(error.json()));
    }

    getMessages() {
        return this._http.get('http://localhost:3000/message')
            .map(response => {
                const data = response.json().obj
                let objs: any[] = [];
                for (let i=0; i < data.length; i++) {
                    let message = new Message(data[i].content, data[i]._id, 'Dummy', null);
                    objs.push(message);
                }
                return objs;
            })
            .catch(error => Observable.throw(error.json()));;
    }

    editMessage(message: Message) {
        this.messageIsEdit.emit(message);
        //this.messages[this.messages.indexOf(message)] = new Message('Edited', null, 'Kobus')
    }

    deleteMessage(message: Message) {
        this.messages.splice(this.messages.indexOf(message), 1);
    }
}