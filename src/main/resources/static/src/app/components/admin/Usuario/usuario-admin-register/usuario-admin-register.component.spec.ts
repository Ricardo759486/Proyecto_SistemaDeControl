import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioAdminRegisterComponent } from './usuario-admin-register.component';

describe('UsuarioAdminRegisterComponent', () => {
  let component: UsuarioAdminRegisterComponent;
  let fixture: ComponentFixture<UsuarioAdminRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsuarioAdminRegisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioAdminRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
