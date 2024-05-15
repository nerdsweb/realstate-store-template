import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAdvisorComponent } from './home-advisor.component';

describe('HomeAdvisorComponent', () => {
  let component: HomeAdvisorComponent;
  let fixture: ComponentFixture<HomeAdvisorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeAdvisorComponent]
    });
    fixture = TestBed.createComponent(HomeAdvisorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
