import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdentrabajoAdminComponent } from './ordentrabajo-admin.component';

describe('OrdentrabajoAdminComponent', () => {
  let component: OrdentrabajoAdminComponent;
  let fixture: ComponentFixture<OrdentrabajoAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdentrabajoAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdentrabajoAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
