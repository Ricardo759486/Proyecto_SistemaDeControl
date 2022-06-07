import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdentrabajoAdminPageComponent } from './ordentrabajo-admin-page.component';

describe('OrdentrabajoAdminPageComponent', () => {
  let component: OrdentrabajoAdminPageComponent;
  let fixture: ComponentFixture<OrdentrabajoAdminPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdentrabajoAdminPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdentrabajoAdminPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
