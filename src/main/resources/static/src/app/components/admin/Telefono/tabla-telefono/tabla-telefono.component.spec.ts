import { ComponentFixture, TestBed } from '@angular/core/testing';
import {TablaTelefonoComponent} from "./tabla-telefono.component";

describe('TablaTelefonoComponent', () => {
  let component: TablaTelefonoComponent;
  let fixture: ComponentFixture<TablaTelefonoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaTelefonoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaTelefonoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
