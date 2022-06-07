import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaCuadrillaComponent } from './tabla-cuadrilla.component';

describe('TablaCuadrillaComponent', () => {
  let component: TablaCuadrillaComponent;
  let fixture: ComponentFixture<TablaCuadrillaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaCuadrillaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaCuadrillaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
