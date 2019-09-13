import { TestBed } from '@angular/core/testing';

import { ReportTemplateServiceService } from './report-template-service.service';

describe('ReportTemplateServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ReportTemplateServiceService = TestBed.get(ReportTemplateServiceService);
    expect(service).toBeTruthy();
  });
});
