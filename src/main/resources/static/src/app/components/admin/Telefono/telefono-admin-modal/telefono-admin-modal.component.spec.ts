import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelefonoAdminModalComponent } from './telefono-admin-modal.component';

describe('TelefonoAdminModalComponent', () => {
  let component: TelefonoAdminModalComponent;
  let fixture: ComponentFixture<TelefonoAdminModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelefonoAdminModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TelefonoAdminModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
