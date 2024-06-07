import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { icons, images } from 'src/assets/images/image-routes';

@Component({
  selector: 'pag-products-layout',
  templateUrl: './products-layout.component.html',
  styleUrls: ['./products-layout.component.scss']
})
export class ProductsLayoutComponent {

  products: any[] = [
    {
      image: images.product12,
      price: '450.000',
      currency: '$',
      description: '6 HAB 3/1 BAÑOS 3 EST',
      name: 'LA LAGUNITA'
    },
    {
      image: images.product7,
      price: '450.000',
      currency: '$',
      description: '6 HAB 3/1 BAÑOS 3 EST',
      name: 'LA LAGUNITA'
    },
    {
      image: images.product11,
      price: '450.000',
      currency: '$',
      description: '6 HAB 3/1 BAÑOS 3 EST',
      name: 'LA LAGUNITA'
    },
    {
      image: images.product2,
      price: '450.000',
      currency: '$',
      description: '6 HAB 3/1 BAÑOS 3 EST',
      name: 'LA LAGUNITA'
    },
    {
      image: images.product3,
      price: '450.000',
      currency: '$',
      description: '6 HAB 3/1 BAÑOS 3 EST',
      name: 'LA LAGUNITA'
    },
    {
      image: images.product12,
      price: '450.000',
      currency: '$',
      description: '6 HAB 3/1 BAÑOS 3 EST',
      name: 'LA LAGUNITA'
    },
    {
      image: images.product7,
      price: '450.000',
      currency: '$',
      description: '6 HAB 3/1 BAÑOS 3 EST',
      name: 'LA LAGUNITA'
    },
    {
      image: images.product11,
      price: '450.000',
      currency: '$',
      description: '6 HAB 3/1 BAÑOS 3 EST',
      name: 'LA LAGUNITA'
    },
    {
      image: images.product2,
      price: '450.000',
      currency: '$',
      description: '6 HAB 3/1 BAÑOS 3 EST',
      name: 'LA LAGUNITA'
    },
    {
      image: images.product3,
      price: '450.000',
      currency: '$',
      description: '6 HAB 3/1 BAÑOS 3 EST',
      name: 'LA LAGUNITA'
    },
    {
      image: images.product7,
      price: '450.000',
      currency: '$',
      description: '6 HAB 3/1 BAÑOS 3 EST',
      name: 'LA LAGUNITA'
    },
    {
      image: images.product11,
      price: '450.000',
      currency: '$',
      description: '6 HAB 3/1 BAÑOS 3 EST',
      name: 'LA LAGUNITA'
    },
  ]

  cheap: any[] = [
    {
      image: images.product3,
      price: '450.000',
      currency: '$',
      description: '6 HAB 3/1 BAÑOS 3 EST',
      name: 'LA LAGUNITA'
    },
    {
      image: images.product7,
      price: '450.000',
      currency: '$',
      description: '6 HAB 3/1 BAÑOS 3 EST',
      name: 'LA LAGUNITA'
    },
    {
      image: images.product11,
      price: '450.000',
      currency: '$',
      description: '6 HAB 3/1 BAÑOS 3 EST',
      name: 'LA LAGUNITA'
    },
  ]

  items: any[] = []

  smallMode: boolean = false

  @HostListener('window:resize', ['$event'])
  onResize(e: Event) {

    if (window.innerWidth <= 767) {

      this.smallMode = true

    } else {

      this.smallMode = false

    }

  }

  constructor(
    private router: Router
  ) { }

  ngOnInit() {

    if (window.innerWidth <= 767) {

      this.smallMode = true

    } else {

      this.smallMode = false

    }

  }

  /**
   * Me lleva a la vista de detalle
   * @param id 
   */
  navigate(id: string) {
    this.router.navigate(['/Productos/Detalle'])
  }

}
