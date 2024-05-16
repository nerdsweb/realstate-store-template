import { Component, Input } from '@angular/core';

@Component({
  selector: 'cmp-core-advisor',
  templateUrl: './core-advisor.component.html',
  styleUrls: ['./core-advisor.component.scss']
})
export class CoreAdvisorComponent {

  @Input({ required: true }) advisorData!: {
    image: string,
    name: string,
    position: string
  }

}

