import { TestBed } from '@angular/core/testing';

import { MaterialAdminService } from './material-admin.service';

describe('MaterialAdminService', () => {
  let service: MaterialAdminService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MaterialAdminService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
