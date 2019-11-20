import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarteMembreComponent } from './carte-membre.component';

describe('CarteMembreComponent', () => {
  let component: CarteMembreComponent;
  let fixture: ComponentFixture<CarteMembreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarteMembreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarteMembreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
