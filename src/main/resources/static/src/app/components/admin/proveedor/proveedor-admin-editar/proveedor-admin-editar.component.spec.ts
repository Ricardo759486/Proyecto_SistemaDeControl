import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProveedorAdminEditarComponent } from './proveedor-admin-editar.component';

describe('ProveedorAdminEditarComponent', () => {
  let component: ProveedorAdminEditarComponent;
  let fixture: ComponentFixture<ProveedorAdminEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProveedorAdminEditarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProveedorAdminEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
