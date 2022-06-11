import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialcuadrillaAdminEditarComponent } from './materialcuadrilla-admin-editar.component';

describe('MaterialcuadrillaAdminEditarComponent', () => {
  let component: MaterialcuadrillaAdminEditarComponent;
  let fixture: ComponentFixture<MaterialcuadrillaAdminEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialcuadrillaAdminEditarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialcuadrillaAdminEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
