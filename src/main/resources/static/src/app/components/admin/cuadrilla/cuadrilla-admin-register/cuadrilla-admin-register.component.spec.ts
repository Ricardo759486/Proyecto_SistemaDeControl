import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuadrillasAdminRegisterComponent } from './cuadrillas-admin-register.component';

describe('CuadrillasAdminComponent', () => {
  let component: CuadrillasAdminRegisterComponent;
  let fixture: ComponentFixture<CuadrillasAdminRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuadrillasAdminRegisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CuadrillasAdminRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
