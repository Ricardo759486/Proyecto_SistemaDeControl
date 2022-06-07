import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProveedorAdminDeleteComponent } from './proveedor-admin-delete.component';

describe('ProveedorAdminDeleteComponent', () => {
  let component: ProveedorAdminDeleteComponent;
  let fixture: ComponentFixture<ProveedorAdminDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProveedorAdminDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProveedorAdminDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
