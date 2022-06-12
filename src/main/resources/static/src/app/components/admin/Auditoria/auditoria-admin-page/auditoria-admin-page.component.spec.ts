import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditoriaAdminPageComponent } from './auditoria-admin-page.component';

describe('AuditoriaAdminPageComponent', () => {
  let component: AuditoriaAdminPageComponent;
  let fixture: ComponentFixture<AuditoriaAdminPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuditoriaAdminPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuditoriaAdminPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
