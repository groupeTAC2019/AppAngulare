import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarteMaisonComponent } from './carte-maison.component';

describe('CarteMaisonComponent', () => {
  let component: CarteMaisonComponent;
  let fixture: ComponentFixture<CarteMaisonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarteMaisonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarteMaisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
