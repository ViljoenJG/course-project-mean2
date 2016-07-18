import { Component } from '@angular/core';
import { Routes, ROUTER_DIRECTIVES } from "@angular/router";

import { AuthenticationComponent } from "./auth/authentication.component";
import { MessagesComponent } from "./messages/messages.component";
import { HeaderComponent } from "./header.component";
import {ErrorComponent} from "./errors/error.component";

@Component({
    selector: 'my-app',
    template: `
        <div class="container">
            <my-header></my-header>
            <router-outlet></router-outlet>
            <my-error></my-error>
        </div>
    `,
    directives: [ROUTER_DIRECTIVES, HeaderComponent, ErrorComponent]
})
@Routes([
    {path: '/messages', component: MessagesComponent},
    {path: '/auth', component: AuthenticationComponent}
])
export class AppComponent {

}