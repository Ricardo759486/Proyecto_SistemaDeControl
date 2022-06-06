import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialAdminComponent } from './material-admin.component';

describe('MaterialAdminComponent', () => {
  let component: MaterialAdminComponent;
  let fixture: ComponentFixture<MaterialAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
