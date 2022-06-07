import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZonaAdminRegisterComponent } from './zona-admin-register.component';

describe('ZonaAdminComponent', () => {
  let component: ZonaAdminRegisterComponent;
  let fixture: ComponentFixture<ZonaAdminRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZonaAdminRegisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZonaAdminRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
