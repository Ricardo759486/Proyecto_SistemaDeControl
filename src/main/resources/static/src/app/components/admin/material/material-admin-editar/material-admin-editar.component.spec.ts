import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialAdminEditarComponent } from './material-admin-editar.component';

describe('MaterialAdminEditarComponent', () => {
  let component: MaterialAdminEditarComponent;
  let fixture: ComponentFixture<MaterialAdminEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialAdminEditarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialAdminEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
