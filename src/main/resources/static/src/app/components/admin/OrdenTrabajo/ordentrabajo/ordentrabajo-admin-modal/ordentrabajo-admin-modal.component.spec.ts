import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdentrabajoAdminModalComponent } from './ordentrabajo-admin-modal.component';

describe('OrdentrabajoAdminModalComponent', () => {
  let component: OrdentrabajoAdminModalComponent;
  let fixture: ComponentFixture<OrdentrabajoAdminModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdentrabajoAdminModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdentrabajoAdminModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
