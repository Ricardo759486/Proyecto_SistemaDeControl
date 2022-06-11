import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdentrabajoAdminEditarComponent } from './ordentrabajo-admin-editar.component';

describe('OrdentrabajoAdminEditarComponent', () => {
  let component: OrdentrabajoAdminEditarComponent;
  let fixture: ComponentFixture<OrdentrabajoAdminEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdentrabajoAdminEditarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdentrabajoAdminEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
