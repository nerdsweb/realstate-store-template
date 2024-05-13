import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CmmModule } from 'src/app/common/common.module';
import { CoreProductAdComponent } from './components/core-product-ad/core-product-ad.component';


@NgModule({
    declarations: [
        CoreProductAdComponent
    ],
    imports: [
        CommonModule,
        CmmModule,
    ],
    exports: [
        CoreProductAdComponent
    ]
})
export class CoreModule { }
