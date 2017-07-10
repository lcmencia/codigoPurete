import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LineaAccionComponent } from './linea-accion.component';

describe('LineaAccionComponent', () => {
  let component: LineaAccionComponent;
  let fixture: ComponentFixture<LineaAccionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LineaAccionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LineaAccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
