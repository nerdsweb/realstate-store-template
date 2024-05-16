import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreAdvisorComponent } from './core-advisor.component';

describe('CoreAdvisorComponent', () => {
  let component: CoreAdvisorComponent;
  let fixture: ComponentFixture<CoreAdvisorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoreAdvisorComponent]
    });
    fixture = TestBed.createComponent(CoreAdvisorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
