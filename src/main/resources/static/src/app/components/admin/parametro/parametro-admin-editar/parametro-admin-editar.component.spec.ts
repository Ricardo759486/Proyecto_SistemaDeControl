import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParametroAdminEditarComponent } from './parametro-admin-editar.component';

describe('ParametroAdminEditarComponent', () => {
  let component: ParametroAdminEditarComponent;
  let fixture: ComponentFixture<ParametroAdminEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParametroAdminEditarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParametroAdminEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
