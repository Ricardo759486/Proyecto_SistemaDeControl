import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProveedorAdminRegisterComponent } from './proveedor-admin-register.component';

describe('ProveedorAdminRegisterComponent', () => {
  let component: ProveedorAdminRegisterComponent;
  let fixture: ComponentFixture<ProveedorAdminRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProveedorAdminRegisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProveedorAdminRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
