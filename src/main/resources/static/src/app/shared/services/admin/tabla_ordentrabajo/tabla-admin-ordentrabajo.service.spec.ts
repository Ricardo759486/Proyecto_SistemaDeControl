import { TestBed } from '@angular/core/testing';

import { TablaAdminOrdentrabajoService } from './tabla-admin-ordentrabajo.service';

describe('TablaAdminOrdentrabajoService', () => {
  let service: TablaAdminOrdentrabajoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TablaAdminOrdentrabajoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
