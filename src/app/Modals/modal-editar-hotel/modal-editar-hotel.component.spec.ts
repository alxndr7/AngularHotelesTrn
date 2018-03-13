import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEditarHotelComponent } from './modal-editar-hotel.component';

describe('ModalEditarHotelComponent', () => {
  let component: ModalEditarHotelComponent;
  let fixture: ComponentFixture<ModalEditarHotelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalEditarHotelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalEditarHotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
