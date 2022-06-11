import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialcuadrillaAdminModalComponent } from './materialcuadrilla-admin-modal.component';

describe('MaterialcuadrillaAdminModalComponent', () => {
  let component: MaterialcuadrillaAdminModalComponent;
  let fixture: ComponentFixture<MaterialcuadrillaAdminModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialcuadrillaAdminModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialcuadrillaAdminModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
