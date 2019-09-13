import { TestBed } from '@angular/core/testing';

import { LayoutEditorServiceService } from './layout-editor-service.service';

describe('LayoutEditorServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LayoutEditorServiceService = TestBed.get(LayoutEditorServiceService);
    expect(service).toBeTruthy();
  });
});
