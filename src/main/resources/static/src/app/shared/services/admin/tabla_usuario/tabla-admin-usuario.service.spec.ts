import { TestBed } from '@angular/core/testing';

import { TablaAdminUsuarioService } from './tabla-admin-usuario.service';

describe('TablaAdminUsuarioService', () => {
  let service: TablaAdminUsuarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TablaAdminUsuarioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
