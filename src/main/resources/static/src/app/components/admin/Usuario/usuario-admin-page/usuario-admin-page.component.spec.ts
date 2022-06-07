import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioAdminPageComponent } from './usuario-admin-page.component';

describe('UsuarioAdminPageComponent', () => {
  let component: UsuarioAdminPageComponent;
  let fixture: ComponentFixture<UsuarioAdminPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsuarioAdminPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioAdminPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
