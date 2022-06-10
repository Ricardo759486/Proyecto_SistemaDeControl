import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProveedorAdminModalComponent } from './proveedor-admin-modal.component';

describe('ProveedorAdminModalComponent', () => {
  let component: ProveedorAdminModalComponent;
  let fixture: ComponentFixture<ProveedorAdminModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProveedorAdminModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProveedorAdminModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
