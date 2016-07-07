import {Component} from "@angular/core";
import {Message} from "./message";

@Component({
    selector: 'my-message',
    template: `
        <article class="panel panel-default">
            <div class="panel-body">
                {{ message.content }}
            </div>
            <footer class="panel-footer">
                <div class="author">
                    {{ message.username }}
                </div>
                <div class="config">
                    <a href="#">Edit</a>
                    <a href="#">Delete</a>
                </div>
            </footer>
        </article>
    `,
    styles: [`
        .author {
            display: inline-block;
            font-style: italic;
            font-size: 12px;
            width: 80%;
        }
        .config {
            display: inline-block;
            text-align: right;
            font-size: 12x;
            width: 19%;
        }
    `]
})

export class MessageComponent {
    message: Message = new Message('The content', null, 'Kobus');
}