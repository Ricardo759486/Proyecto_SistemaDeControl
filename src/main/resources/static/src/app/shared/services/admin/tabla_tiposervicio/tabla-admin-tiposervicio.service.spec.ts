import { TestBed } from '@angular/core/testing';

import { TablaAdminTiposervicioService } from './tabla-admin-tiposervicio.service';

describe('TablaAdminTiposervicioService', () => {
  let service: TablaAdminTiposervicioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TablaAdminTiposervicioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
