import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaOrdentrabajoComponent } from './tabla-ordentrabajo.component';

describe('TablaOrdentrabajoComponent', () => {
  let component: TablaOrdentrabajoComponent;
  let fixture: ComponentFixture<TablaOrdentrabajoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaOrdentrabajoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaOrdentrabajoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
