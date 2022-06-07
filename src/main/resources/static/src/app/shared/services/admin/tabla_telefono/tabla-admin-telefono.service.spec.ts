import { TestBed } from '@angular/core/testing';

import { TablaAdminTelefonoService } from './tabla-admin-telefono.service';

describe('TablaAdminTelefonoService', () => {
  let service: TablaAdminTelefonoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TablaAdminTelefonoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
