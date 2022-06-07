import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialAdminPageComponent } from './material-admin-page.component';

describe('MaterialAdminPageComponent', () => {
  let component: MaterialAdminPageComponent;
  let fixture: ComponentFixture<MaterialAdminPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialAdminPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialAdminPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
