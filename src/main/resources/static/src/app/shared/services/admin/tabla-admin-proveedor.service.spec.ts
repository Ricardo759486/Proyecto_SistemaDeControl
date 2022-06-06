import { TestBed } from '@angular/core/testing';

import { TablaAdminProveedorService } from './tabla-admin-proveedor.service';

describe('TablaAdminProveedorService', () => {
  let service: TablaAdminProveedorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TablaAdminProveedorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
