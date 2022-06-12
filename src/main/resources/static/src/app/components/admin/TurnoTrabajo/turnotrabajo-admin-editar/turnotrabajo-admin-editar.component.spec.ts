import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TurnotrabajoAdminEditarComponent } from './turnotrabajo-admin-editar.component';

describe('TurnotrabajoAdminEditarComponent', () => {
  let component: TurnotrabajoAdminEditarComponent;
  let fixture: ComponentFixture<TurnotrabajoAdminEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TurnotrabajoAdminEditarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TurnotrabajoAdminEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
