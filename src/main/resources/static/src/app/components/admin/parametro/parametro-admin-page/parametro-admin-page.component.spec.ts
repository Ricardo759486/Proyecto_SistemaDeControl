import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParametroAdminPageComponent } from './parametro-admin-page.component';

describe('ParametroAdminPageComponent', () => {
  let component: ParametroAdminPageComponent;
  let fixture: ComponentFixture<ParametroAdminPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParametroAdminPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParametroAdminPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
