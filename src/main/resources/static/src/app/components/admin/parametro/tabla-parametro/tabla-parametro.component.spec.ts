import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaParametroComponent } from './tabla-parametro.component';

describe('TablaParametroComponent', () => {
  let component: TablaParametroComponent;
  let fixture: ComponentFixture<TablaParametroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaParametroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaParametroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
