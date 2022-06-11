import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteAdminEditarComponent } from './cliente-admin-editar.component';

describe('ClienteAdminEditarComponent', () => {
  let component: ClienteAdminEditarComponent;
  let fixture: ComponentFixture<ClienteAdminEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClienteAdminEditarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienteAdminEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
