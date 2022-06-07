import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaTipodocumentoComponent } from './tabla-tipodocumento.component';

describe('TablaTipodocumentoComponent', () => {
  let component: TablaTipodocumentoComponent;
  let fixture: ComponentFixture<TablaTipodocumentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaTipodocumentoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaTipodocumentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
