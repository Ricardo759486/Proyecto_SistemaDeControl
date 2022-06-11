import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteAdminModalComponent } from './cliente-admin-modal.component';

describe('ClienteAdminModalComponent', () => {
  let component: ClienteAdminModalComponent;
  let fixture: ComponentFixture<ClienteAdminModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClienteAdminModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienteAdminModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
