import {Component} from "@angular/core";
import {MessageListComponent} from "./message-list.component";
import {MessageInputComponent} from "./message-input.component";
import {AuthService} from "../auth/auth.service";

@Component({
    selector: 'my-messages',
    template: `
        <div class="row spacing">
            <my-message-input *ngIf="isLoggedIn()"></my-message-input>
        </div>
        <div class="row spacing">
            <my-message-list></my-message-list>
        </div>
    `,
    directives: [MessageListComponent, MessageInputComponent]
})

export class MessagesComponent {
    constructor(private _authService: AuthService) {}

    isLoggedIn() {
        return this._authService.isLoggedIn();
    }
}