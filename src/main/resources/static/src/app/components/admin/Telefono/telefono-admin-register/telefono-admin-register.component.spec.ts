import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelefonoAdminRegisterComponent } from './telefono-admin-register.component';

describe('TelefonoAdminComponent', () => {
  let component: TelefonoAdminRegisterComponent;
  let fixture: ComponentFixture<TelefonoAdminRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelefonoAdminRegisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TelefonoAdminRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
