import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { logoShape } from 'src/app/common/assets/images/images-routes';
import { CmmEcomProductCardDataModel } from 'src/app/common/data/utils/models/ecommerce.models';
import { images, logos } from 'src/assets/images/image-routes';

@Component({
  selector: 'pag-home-layout',
  templateUrl: './home-layout.component.html',
  styleUrls: ['./home-layout.component.scss']
})
export class HomeLayoutComponent {

  images = images

  logos = logos

  /**
   * Productos de la primera sección
   */
  products = [

    {
      name: 'La Lagunita',
      price: 'Ref.23.00',
      previousPrice: 'Ref.22.00',
      badgeText: 'EN VENTA',
      images: [
        images.product1,
        images.product2,
        images.product3,
      ]
    },
    {
      name: 'La Lagunita',
      price: 'Ref.23.00',
      previousPrice: 'Ref.22.00',
      badgeText: 'EN ALQUILER',
      images: [
        images.product2,
        images.product1,
        images.product3,
      ]
    },
    {
      name: 'La Lagunita',
      price: 'Ref.23.00',
      previousPrice: 'Ref.22.00',
      badgeText: 'EN VENTA',
      images: [
        images.product4,
        images.product1,
        images.product2,
      ]
    },
  ]

  constructor(
    private router: Router
  ) { }

  /**
   * Me lleva a la vista de detalle
   * @param id 
   */
  navigate(id: string) {
    this.router.navigate(['/products/detail'])
  }

}
