import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CmmEcomProductDetailModelv2, CmmEcomRealstateDetailModel } from 'src/app/common/data/utils/models/ecommerce.models';
import { icons, images } from 'src/assets/images/image-routes';

@Component({
  selector: 'pag-products-detail-layout',
  templateUrl: './products-detail-layout.component.html',
  styleUrls: ['./products-detail-layout.component.scss']
})
export class ProductsDetailLayoutComponent {

  looks = []

  product: CmmEcomRealstateDetailModel = {
    id: '1',
    images: [
      images.product6,
      images.product12,
      images.product10,
      images.product12,
      images.product12,
      images.product12,
      images.product12,
      images.product12,
      images.product12,
    ],
    mainImage: images.product6,
    name: 'La Lagunita',
    modality: 'EN VENTA',
    currency: 'USD',
    previousPrice: '650.000',
    price: '500.000',
    description: 'Exclusiva propiedad ubicada en la lagunita cerca del country club, a 85 metros del prestigioso centro comercial de la zona, pisos de mármol.',
    equipment: 'Cocina, salón, comedor, vestier, terraza cubierta, bar, lavadero, baño auxiliar, closet, maletero, TV e internet, línea telefónica, wifi, gas directo, equipado con electrodomésticos, pisos de cerámica, Además cuenta con jardín, salón de fiesta, ascensor, vigilancia y pozo de agua.',
    details: [
      {
        icon: 'straighten',
        info: '350 Mt2 de construcción'
      },
      {
        icon: 'bed',
        info: '5 habitaciones'
      },
      {
        icon: 'shower',
        info: '7/2 Baños'
      },
      {
        icon: 'directions_car',
        info: '4 puestos'
      },
    ]
  }

  products: any[] = [
    {
      image: images.product3,
      title: 'SARDINAS EN SALSA DE TOMATE',
      brand: 'MARGARITA',
      price: '1,25',
      previousprice: '1,50',
      currency: '$',
      id: '3'
    },
    {
      image: images.product4,
      title: 'KETCHUP PAMPERO 300ML',
      price: '1,25',
      previousprice: '1,50',
      currency: '$',
      id: '4'
    },
    {
      image: images.product6,
      title: 'ATUN EN ACEITE EVEBA 1KG',
      price: '1,25',
      previousprice: '1,50',
      currency: '$',
      id: '5'
    },
  ]

  /**
   * Asesores
   */
  advisors: any[] = [
    {
      image: images.product1,
      name: 'Anastasia Pérez',
      position: 'Asesor inmobiliario'
    },
    {
      image: images.product1,
      name: 'Anastasia Pérez',
      position: 'Asesor inmobiliario'
    },
    {
      image: images.product1,
      name: 'Anastasia Pérez',
      position: 'Asesor inmobiliario'
    },
  ]

  promos = []

  items: any[] = []

  smallMode: boolean = false

  constructor(
    private router: Router
  ) { }

  /**
   * Me lleva a la vista de detalle
   * @param id
   */
  navigate(id: string) {
    this.router.navigate(['/Productos/Detalle'])
  }

}
