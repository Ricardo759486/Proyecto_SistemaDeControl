import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuadrillaAdminModalComponent } from './cuadrilla-admin-modal.component';

describe('CuadrillaAdminModalComponent', () => {
  let component: CuadrillaAdminModalComponent;
  let fixture: ComponentFixture<CuadrillaAdminModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuadrillaAdminModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CuadrillaAdminModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
