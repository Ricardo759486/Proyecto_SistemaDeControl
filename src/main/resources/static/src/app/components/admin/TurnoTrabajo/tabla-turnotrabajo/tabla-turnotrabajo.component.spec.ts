import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaTurnotrabajoComponent } from './tabla-turnotrabajo.component';

describe('TablaTurnotrabajoComponent', () => {
  let component: TablaTurnotrabajoComponent;
  let fixture: ComponentFixture<TablaTurnotrabajoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaTurnotrabajoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaTurnotrabajoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
