import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaMaterialcuadrillaComponent } from './tabla-materialcuadrilla.component';

describe('TablaMaterialcuadrillaComponent', () => {
  let component: TablaMaterialcuadrillaComponent;
  let fixture: ComponentFixture<TablaMaterialcuadrillaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaMaterialcuadrillaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaMaterialcuadrillaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
