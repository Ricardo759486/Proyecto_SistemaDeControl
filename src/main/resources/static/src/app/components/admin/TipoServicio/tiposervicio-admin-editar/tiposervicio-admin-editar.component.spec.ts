import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiposervicioAdminEditarComponent } from './tiposervicio-admin-editar.component';

describe('TiposervicioAdminEditarComponent', () => {
  let component: TiposervicioAdminEditarComponent;
  let fixture: ComponentFixture<TiposervicioAdminEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TiposervicioAdminEditarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TiposervicioAdminEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
