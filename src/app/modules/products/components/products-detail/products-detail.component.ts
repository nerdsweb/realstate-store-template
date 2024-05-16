import { Component, Input } from '@angular/core';
import { CmmEcomRealstateDetailModel } from 'src/app/common/data/utils/models/ecommerce.models';
import { images } from 'src/assets/images/image-routes';

@Component({
  selector: 'cmp-products-detail',
  templateUrl: './products-detail.component.html',
  styleUrls: ['./products-detail.component.scss']
})
export class ProductsDetailComponent {

  @Input() product!: CmmEcomRealstateDetailModel

  /**
   * Index de la imagen a mostrar
   */
  mainImageIndex: number = 0

  choosenVariant: number = 0

  choosenSize: number = 0

  constructor() { }

}
