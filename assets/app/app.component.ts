import { Component } from '@angular/core';
import {Routes} from "@angular/router";
import {MessageListComponent} from "./messages/message-list.component";
import {MessageInputComponent} from "./messages/message-input.component";
import {MessageComponent} from "./messages/message.component";

@Component({
    selector: 'my-app',
    template: `
        <div class="row spacing">
            <my-message-input></my-message-input>
        </div>
        <div class="row spacing">
            <my-message-list></my-message-list>
        </div>
    `,
    directives: [MessageListComponent, MessageInputComponent]
})
@Routes([
    {path: '/', component: MessageComponent}
])
export class AppComponent {

}