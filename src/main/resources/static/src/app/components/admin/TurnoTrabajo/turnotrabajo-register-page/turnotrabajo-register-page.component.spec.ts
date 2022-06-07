import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TurnotrabajoRegisterPageComponent } from './turnotrabajo-register-page.component';

describe('TurnotrabajoRegisterPageComponent', () => {
  let component: TurnotrabajoRegisterPageComponent;
  let fixture: ComponentFixture<TurnotrabajoRegisterPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TurnotrabajoRegisterPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TurnotrabajoRegisterPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
