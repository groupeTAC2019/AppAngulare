import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarteBienComponent } from './carte-bien.component';

describe('CarteBienComponent', () => {
  let component: CarteBienComponent;
  let fixture: ComponentFixture<CarteBienComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarteBienComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarteBienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
