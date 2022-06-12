import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZonaAdminEditarComponent } from './zona-admin-editar.component';

describe('ZonaAdminEditarComponent', () => {
  let component: ZonaAdminEditarComponent;
  let fixture: ComponentFixture<ZonaAdminEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZonaAdminEditarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZonaAdminEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
