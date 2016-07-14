///<reference path="../../typings.d.ts"/>
import { bootstrap } from '@angular/platform-browser-dynamic';
import { ROUTER_PROVIDERS } from "@angular/router";
import { HTTP_PROVIDERS } from "@angular/http";
import { provide } from "@angular/core";
import { LocationStrategy, HashLocationStrategy } from "@angular/common";

import { AppComponent } from "./app.component";
import { MessageService } from "./messages/message.service";

bootstrap(AppComponent, [MessageService, ROUTER_PROVIDERS, provide(LocationStrategy, {useClass: HashLocationStrategy}), HTTP_PROVIDERS]);