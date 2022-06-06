import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuadrillasAdminComponent } from './cuadrillas-admin.component';

describe('CuadrillasAdminComponent', () => {
  let component: CuadrillasAdminComponent;
  let fixture: ComponentFixture<CuadrillasAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuadrillasAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CuadrillasAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
