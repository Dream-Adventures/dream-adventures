import { TestBed } from '@angular/core/testing';

import { MyEmailJsService } from './my-email-js.service';

describe('MyEmailJsService', () => {
  let service: MyEmailJsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyEmailJsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
