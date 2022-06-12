import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParametroAdminModalComponent } from './parametro-admin-modal.component';

describe('ParametroAdminModalComponent', () => {
  let component: ParametroAdminModalComponent;
  let fixture: ComponentFixture<ParametroAdminModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParametroAdminModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParametroAdminModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
