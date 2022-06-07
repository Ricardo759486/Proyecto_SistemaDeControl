import { TestBed } from '@angular/core/testing';

import { CuadrillaAdminService } from './cuadrilla-admin.service';

describe('CuadrillaAdminService', () => {
  let service: CuadrillaAdminService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CuadrillaAdminService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
