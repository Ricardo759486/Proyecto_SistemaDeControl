import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaTiposervicioComponent } from './tabla-tiposervicio.component';

describe('TablaTiposervicioComponent', () => {
  let component: TablaTiposervicioComponent;
  let fixture: ComponentFixture<TablaTiposervicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaTiposervicioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaTiposervicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
