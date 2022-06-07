import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiposervicioAdminRegisterComponent } from './tiposervicio-admin-register.component';

describe('TiposervicioAdminRegisterComponent', () => {
  let component: TiposervicioAdminRegisterComponent;
  let fixture: ComponentFixture<TiposervicioAdminRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TiposervicioAdminRegisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TiposervicioAdminRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
