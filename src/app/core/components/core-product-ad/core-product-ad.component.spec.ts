import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreProductAdComponent } from './core-product-ad.component';

describe('CoreProductAdComponent', () => {
  let component: CoreProductAdComponent;
  let fixture: ComponentFixture<CoreProductAdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoreProductAdComponent]
    });
    fixture = TestBed.createComponent(CoreProductAdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
