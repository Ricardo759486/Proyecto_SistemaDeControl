import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParametroAdminRegisterComponent } from './parametro-admin-register.component';

describe('ParametroAdminComponent', () => {
  let component: ParametroAdminRegisterComponent;
  let fixture: ComponentFixture<ParametroAdminRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParametroAdminRegisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParametroAdminRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
