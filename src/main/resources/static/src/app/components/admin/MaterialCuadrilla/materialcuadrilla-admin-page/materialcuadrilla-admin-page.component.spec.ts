import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialcuadrillaAdminPageComponent } from './materialcuadrilla-admin-page.component';

describe('MaterialcuadrillaAdminPageComponent', () => {
  let component: MaterialcuadrillaAdminPageComponent;
  let fixture: ComponentFixture<MaterialcuadrillaAdminPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialcuadrillaAdminPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialcuadrillaAdminPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
