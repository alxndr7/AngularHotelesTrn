import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalNuevoHotelComponent } from './modal-nuevo-hotel.component';

describe('ModalNuevoHotelComponent', () => {
  let component: ModalNuevoHotelComponent;
  let fixture: ComponentFixture<ModalNuevoHotelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalNuevoHotelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalNuevoHotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
