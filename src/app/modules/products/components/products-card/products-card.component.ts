import { Component, Input } from '@angular/core';

@Component({
  selector: 'cmp-products-card',
  templateUrl: './products-card.component.html',
  styleUrls: ['./products-card.component.scss']
})
export class ProductsCardComponent {

  @Input({ required: true }) product!: {
    image: string,
    price: string,
    description: string,
    currency: string,
    name: string
  }

}
