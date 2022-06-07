import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdentrabajoAdminRegisterComponent } from './ordentrabajo-admin-register.component';

describe('OrdentrabajoAdminComponent', () => {
  let component: OrdentrabajoAdminRegisterComponent;
  let fixture: ComponentFixture<OrdentrabajoAdminRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdentrabajoAdminRegisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdentrabajoAdminRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
