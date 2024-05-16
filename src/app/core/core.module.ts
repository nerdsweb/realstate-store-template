import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CmmModule } from 'src/app/common/common.module';
import { CoreProductAdComponent } from './components/core-product-ad/core-product-ad.component';
import { CoreAdvisorComponent } from './components/core-advisor/core-advisor.component';


@NgModule({
    declarations: [
        CoreProductAdComponent,
        CoreAdvisorComponent
    ],
    imports: [
        CommonModule,
        CmmModule,
    ],
    exports: [
        CoreProductAdComponent,
        CoreAdvisorComponent
    ]
})
export class CoreModule { }
