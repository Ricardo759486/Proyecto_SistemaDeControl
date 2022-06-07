import { TestBed } from '@angular/core/testing';

import { TablaAdminClienteService } from './tabla-admin-cliente.service';

describe('TablaAdminClienteService', () => {
  let service: TablaAdminClienteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TablaAdminClienteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
