import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipodocumentoAdminRegisterComponent } from './tipodocumento-admin-register.component';

describe('TipodocumentoAdminRegisterComponent', () => {
  let component: TipodocumentoAdminRegisterComponent;
  let fixture: ComponentFixture<TipodocumentoAdminRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipodocumentoAdminRegisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TipodocumentoAdminRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
