import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialcuadrillaAdminRegisterComponent } from './materialcuadrilla-admin-register.component';

describe('MaterialcuadrillaAdminComponent', () => {
  let component: MaterialcuadrillaAdminRegisterComponent;
  let fixture: ComponentFixture<MaterialcuadrillaAdminRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialcuadrillaAdminRegisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialcuadrillaAdminRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
