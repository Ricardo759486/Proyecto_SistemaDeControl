import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelefonoAdminEditarComponent } from './telefono-admin-editar.component';

describe('TelefonoAdminEditarComponent', () => {
  let component: TelefonoAdminEditarComponent;
  let fixture: ComponentFixture<TelefonoAdminEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelefonoAdminEditarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TelefonoAdminEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
