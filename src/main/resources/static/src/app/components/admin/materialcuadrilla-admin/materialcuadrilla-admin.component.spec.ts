import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialcuadrillaAdminComponent } from './materialcuadrilla-admin.component';

describe('MaterialcuadrillaAdminComponent', () => {
  let component: MaterialcuadrillaAdminComponent;
  let fixture: ComponentFixture<MaterialcuadrillaAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialcuadrillaAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialcuadrillaAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
