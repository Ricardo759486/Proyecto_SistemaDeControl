import { TestBed } from '@angular/core/testing';

import { TablaAdminTipoDocumentoService } from './tabla-admin-tipo-documento.service';

describe('TablaAdminTipoDocumentoService', () => {
  let service: TablaAdminTipoDocumentoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TablaAdminTipoDocumentoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
