import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProguctItemComponent } from './proguct-item.component';

describe('ProguctItemComponent', () => {
  let component: ProguctItemComponent;
  let fixture: ComponentFixture<ProguctItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProguctItemComponent]
    });
    fixture = TestBed.createComponent(ProguctItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
