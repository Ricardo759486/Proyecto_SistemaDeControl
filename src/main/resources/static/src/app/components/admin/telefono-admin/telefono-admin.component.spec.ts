import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelefonoAdminComponent } from './telefono-admin.component';

describe('TelefonoAdminComponent', () => {
  let component: TelefonoAdminComponent;
  let fixture: ComponentFixture<TelefonoAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelefonoAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TelefonoAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
