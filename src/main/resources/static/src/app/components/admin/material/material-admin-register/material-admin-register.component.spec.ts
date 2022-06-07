import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialAdminRegisterComponent } from './material-admin-register.component';

describe('MaterialAdminComponent', () => {
  let component: MaterialAdminRegisterComponent;
  let fixture: ComponentFixture<MaterialAdminRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialAdminRegisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialAdminRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
