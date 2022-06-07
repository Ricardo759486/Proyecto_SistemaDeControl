import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParametroAdminComponent } from './parametro-admin.component';

describe('ParametroAdminComponent', () => {
  let component: ParametroAdminComponent;
  let fixture: ComponentFixture<ParametroAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParametroAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParametroAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
