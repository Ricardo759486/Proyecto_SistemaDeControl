import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialAdminModalComponent } from './material-admin-modal.component';

describe('MaterialAdminModalComponent', () => {
  let component: MaterialAdminModalComponent;
  let fixture: ComponentFixture<MaterialAdminModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialAdminModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialAdminModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
