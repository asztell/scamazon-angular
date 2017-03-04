import { Component } from '@angular/core';

@Component({
    selector: 'pm-app',
    template: `
        <div class="container">
            <div class="row">
                <h1>{{ pageTitle }}</h1>
                <pm-products></pm-products>
            </div>
        </div>
    `
})
export class AppComponent {
    pageTitle: string = `Scamazon`;
}
