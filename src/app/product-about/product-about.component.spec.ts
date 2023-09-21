  import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductAboutComponent } from './product-about.component';

describe('ProductAboutComponent', () => {
  let component: ProductAboutComponent;
  let fixture: ComponentFixture<ProductAboutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductAboutComponent]
    });
    fixture = TestBed.createComponent(ProductAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
