import { TestBed } from '@angular/core/testing';

import { TablaAdminTurnotrabajoService } from './tabla-admin-turnotrabajo.service';

describe('TablaAdminTurnotrabajoService', () => {
  let service: TablaAdminTurnotrabajoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TablaAdminTurnotrabajoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
