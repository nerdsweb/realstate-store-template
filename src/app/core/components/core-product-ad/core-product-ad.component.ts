import { Component, Input } from '@angular/core';
import { images } from 'src/assets/images/image-routes';

@Component({
  selector: 'cmp-core-product-ad',
  templateUrl: './core-product-ad.component.html',
  styleUrls: ['./core-product-ad.component.scss']
})
export class CoreProductAdComponent {

  images = images

  @Input({ required: true }) product!: {
    name: string,
    price: string,
    previousPrice: string,
    badgeText?: string,
    images: string[]
  }

  @Input({ required: true }) carouselId: string = ''

}
