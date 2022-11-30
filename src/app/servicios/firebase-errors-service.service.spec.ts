import { TestBed } from '@angular/core/testing';

import { FirebaseErrorsServiceService } from './firebase-errors-service.service';

describe('FirebaseErrorsServiceService', () => {
  let service: FirebaseErrorsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FirebaseErrorsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
