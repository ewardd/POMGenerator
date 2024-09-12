import { TestBed } from '@angular/core/testing';

import { OutputGeneratorService } from './output-generator.service';

describe('OutputGeneratorService', () => {
  let service: OutputGeneratorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OutputGeneratorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
