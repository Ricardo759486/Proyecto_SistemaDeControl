import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaAuditoriaComponent } from './tabla-auditoria.component';

describe('TablaAuditoriaComponent', () => {
  let component: TablaAuditoriaComponent;
  let fixture: ComponentFixture<TablaAuditoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaAuditoriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaAuditoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
