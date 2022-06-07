import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteAdminRegisterComponent } from './cliente-admin-register.component';

describe('ClienteAdminComponent', () => {
  let component: ClienteAdminRegisterComponent;
  let fixture: ComponentFixture<ClienteAdminRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClienteAdminRegisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienteAdminRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
