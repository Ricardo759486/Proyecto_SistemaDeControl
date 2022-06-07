import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteAdminPageComponent } from './cliente-admin-page.component';

describe('ClienteAdminPageComponent', () => {
  let component: ClienteAdminPageComponent;
  let fixture: ComponentFixture<ClienteAdminPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClienteAdminPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienteAdminPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
