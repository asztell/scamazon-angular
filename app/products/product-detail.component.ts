/**
 * Created by krutoy on 3/13/17.
 */
import { Component } from '@angular/core';

import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
    moduleId: module.id,
    selector: 'product-detail',
    templateUrl: 'product-detail.component.html'
})
export class ProductDetailComponent {
    pageTitle: string = 'Product Detail';
    products: IProduct;
}