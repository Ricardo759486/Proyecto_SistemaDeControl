import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuadrillaAdminPageComponent } from './cuadrilla-admin-page.component';

describe('CuadrillaAdminPageComponent', () => {
  let component: CuadrillaAdminPageComponent;
  let fixture: ComponentFixture<CuadrillaAdminPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuadrillaAdminPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CuadrillaAdminPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
