import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TurnotrabajoAdminModalComponent } from './turnotrabajo-admin-modal.component';

describe('TurnotrabajoAdminModalComponent', () => {
  let component: TurnotrabajoAdminModalComponent;
  let fixture: ComponentFixture<TurnotrabajoAdminModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TurnotrabajoAdminModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TurnotrabajoAdminModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
