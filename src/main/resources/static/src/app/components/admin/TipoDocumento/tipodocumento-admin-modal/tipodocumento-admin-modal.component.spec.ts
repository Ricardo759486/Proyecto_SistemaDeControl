import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipodocumentoAdminModalComponent } from './tipodocumento-admin-modal.component';

describe('TipodocumentoAdminModalComponent', () => {
  let component: TipodocumentoAdminModalComponent;
  let fixture: ComponentFixture<TipodocumentoAdminModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipodocumentoAdminModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TipodocumentoAdminModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
