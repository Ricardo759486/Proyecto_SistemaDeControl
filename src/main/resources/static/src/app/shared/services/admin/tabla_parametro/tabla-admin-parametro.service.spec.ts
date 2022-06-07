import { TestBed } from '@angular/core/testing';
import {TablaAdminParametroService} from "./tabla-admin-parametro.service";


describe('TablaAdminParametroService', () => {
  let service: TablaAdminParametroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TablaAdminParametroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
