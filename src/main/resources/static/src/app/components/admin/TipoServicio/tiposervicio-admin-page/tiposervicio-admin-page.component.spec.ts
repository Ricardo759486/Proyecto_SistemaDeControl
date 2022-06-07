import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiposervicioAdminPageComponent } from './tiposervicio-admin-page.component';

describe('TiposervicioAdminPageComponent', () => {
  let component: TiposervicioAdminPageComponent;
  let fixture: ComponentFixture<TiposervicioAdminPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TiposervicioAdminPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TiposervicioAdminPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
