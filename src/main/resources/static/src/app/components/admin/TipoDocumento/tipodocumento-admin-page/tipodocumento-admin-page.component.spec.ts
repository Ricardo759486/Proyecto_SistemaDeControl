import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipodocumentoAdminPageComponent } from './tipodocumento-admin-page.component';

describe('TipodocumentoAdminPageComponent', () => {
  let component: TipodocumentoAdminPageComponent;
  let fixture: ComponentFixture<TipodocumentoAdminPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipodocumentoAdminPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TipodocumentoAdminPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
