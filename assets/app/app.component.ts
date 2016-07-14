import { Component } from '@angular/core';
import { Routes, ROUTER_DIRECTIVES } from "@angular/router";

import { AuthenticationComponent } from "./auth/authentication.component";
import { MessagesComponent } from "./messages/messages.component";
import { HeaderComponent } from "./header.component";

@Component({
    selector: 'my-app',
    template: `
        <div class="container">
            <my-header></my-header>
            <router-outlet></router-outlet>
        </div>
    `,
    directives: [ROUTER_DIRECTIVES, HeaderComponent]
})
@Routes([
    {path: '/', component: MessagesComponent},
    {path: '/auth', component: AuthenticationComponent}
])
export class AppComponent {

}