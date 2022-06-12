import { TestBed } from '@angular/core/testing';

import { TablaAuditoriaService } from './tabla-auditoria.service';

describe('TablaAuditoriaService', () => {
  let service: TablaAuditoriaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TablaAuditoriaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
