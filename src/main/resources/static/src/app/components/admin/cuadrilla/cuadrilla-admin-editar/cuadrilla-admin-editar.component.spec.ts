import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuadrillaAdminEditarComponent } from './cuadrilla-admin-editar.component';

describe('CuadrillaAdminEditarComponent', () => {
  let component: CuadrillaAdminEditarComponent;
  let fixture: ComponentFixture<CuadrillaAdminEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuadrillaAdminEditarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CuadrillaAdminEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
