import { TestBed } from '@angular/core/testing';

import { TablaAdminMaterialcuadrillaService } from './tabla-admin-materialcuadrilla.service';

describe('TablaAdminMaterialcuadrillaService', () => {
  let service: TablaAdminMaterialcuadrillaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TablaAdminMaterialcuadrillaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
