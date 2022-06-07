import { TestBed } from '@angular/core/testing';

import { TablaAdminZonaService } from './tabla-admin-zona.service';

describe('TablaAdminZonaService', () => {
  let service: TablaAdminZonaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TablaAdminZonaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
