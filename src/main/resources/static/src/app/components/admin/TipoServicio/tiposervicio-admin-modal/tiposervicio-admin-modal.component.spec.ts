import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiposervicioAdminModalComponent } from './tiposervicio-admin-modal.component';

describe('TiposervicioAdminModalComponent', () => {
  let component: TiposervicioAdminModalComponent;
  let fixture: ComponentFixture<TiposervicioAdminModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TiposervicioAdminModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TiposervicioAdminModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
