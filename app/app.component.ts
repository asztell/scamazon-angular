import { Component } from '@angular/core';
import { ProductService } from "./products/product.service";

@Component({
    selector: 'pm-app',
    template: `
        <div class="container">
            <div class="row">
                <h1>{{ pageTitle }}</h1>
                <pm-products></pm-products>
            </div>
        </div>
        `,
    providers: [ProductService]
})
export class AppComponent {
    pageTitle: string = `Scamazon`;
}
