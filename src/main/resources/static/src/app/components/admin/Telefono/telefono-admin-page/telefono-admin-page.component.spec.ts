import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelefonoAdminPageComponent } from './telefono-admin-page.component';

describe('TelefonoAdminPageComponent', () => {
  let component: TelefonoAdminPageComponent;
  let fixture: ComponentFixture<TelefonoAdminPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelefonoAdminPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TelefonoAdminPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
