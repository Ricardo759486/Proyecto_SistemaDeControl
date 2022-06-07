import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProveedorAdminPageComponent } from './proveedor-admin-page.component';

describe('ProveedorAdminPageComponent', () => {
  let component: ProveedorAdminPageComponent;
  let fixture: ComponentFixture<ProveedorAdminPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProveedorAdminPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProveedorAdminPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
