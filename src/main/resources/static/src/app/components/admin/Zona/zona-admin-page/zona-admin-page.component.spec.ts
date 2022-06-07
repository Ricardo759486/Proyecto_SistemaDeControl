import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZonaAdminPageComponent } from './zona-admin-page.component';

describe('ZonaAdminPageComponent', () => {
  let component: ZonaAdminPageComponent;
  let fixture: ComponentFixture<ZonaAdminPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZonaAdminPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZonaAdminPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
