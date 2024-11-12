import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreProductAdComponent } from './components/core-product-ad/core-product-ad.component';
import { CoreAdvisorComponent } from './components/core-advisor/core-advisor.component';
import { NerdswebCommonModule } from 'nerdsweb-common';


@NgModule({
    declarations: [
        CoreProductAdComponent,
        CoreAdvisorComponent
    ],
    imports: [
        CommonModule,
        NerdswebCommonModule,
    ],
    exports: [
        CoreProductAdComponent,
        CoreAdvisorComponent
    ]
})
export class CoreModule { }
