import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipodocumentoAdminEditarComponent } from './tipodocumento-admin-editar.component';

describe('TipodocumentoAdminEditarComponent', () => {
  let component: TipodocumentoAdminEditarComponent;
  let fixture: ComponentFixture<TipodocumentoAdminEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipodocumentoAdminEditarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TipodocumentoAdminEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
