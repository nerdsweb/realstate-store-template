import { Component, Input } from '@angular/core';

@Component({
  selector: 'cmp-home-advisor',
  templateUrl: './home-advisor.component.html',
  styleUrls: ['./home-advisor.component.scss']
})
export class HomeAdvisorComponent {

  @Input({ required: true }) advisorData!: {
    image: string,
    name: string,
    position: string
  }

}
