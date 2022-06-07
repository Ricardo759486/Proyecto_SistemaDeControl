import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TurnotrabajoRegisterRegisterComponent } from './turnotrabajo-register-register.component';

describe('TurnotrabajoRegisterRegisterComponent', () => {
  let component: TurnotrabajoRegisterRegisterComponent;
  let fixture: ComponentFixture<TurnotrabajoRegisterRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TurnotrabajoRegisterRegisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TurnotrabajoRegisterRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
