import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeLayoutComponent } from './pages/home-layout/home-layout.component';
import { CmmModule } from 'src/app/common/common.module';
import { CoreModule } from 'src/app/core/core.module';
import { HomeCarouselComponent } from './components/home-carousel/home-carousel.component';
import { HomeAdvisorComponent } from './components/home-advisor/home-advisor.component';


@NgModule({
  declarations: [
    HomeLayoutComponent,
    HomeCarouselComponent,
    HomeAdvisorComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    CmmModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
