import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { +hotelesComponent } from './+hoteles.component';

describe('+hotelesComponent', () => {
  let component: +hotelesComponent;
  let fixture: ComponentFixture<+hotelesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ +hotelesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(+hotelesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
