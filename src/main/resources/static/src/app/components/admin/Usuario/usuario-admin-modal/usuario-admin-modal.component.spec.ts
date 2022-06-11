import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioAdminModalComponent } from './usuario-admin-modal.component';

describe('UsuarioAdminModalComponent', () => {
  let component: UsuarioAdminModalComponent;
  let fixture: ComponentFixture<UsuarioAdminModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsuarioAdminModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioAdminModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
