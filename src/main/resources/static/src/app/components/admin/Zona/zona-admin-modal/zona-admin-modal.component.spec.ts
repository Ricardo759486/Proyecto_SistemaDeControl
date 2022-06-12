import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZonaAdminModalComponent } from './zona-admin-modal.component';

describe('ZonaAdminModalComponent', () => {
  let component: ZonaAdminModalComponent;
  let fixture: ComponentFixture<ZonaAdminModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZonaAdminModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZonaAdminModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
