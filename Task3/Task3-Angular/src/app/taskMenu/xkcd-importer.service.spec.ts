import { TestBed } from '@angular/core/testing';

import { XkcdImporterService } from './xkcd-importer.service';

describe('XkcdImporterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: XkcdImporterService = TestBed.get(XkcdImporterService);
    expect(service).toBeTruthy();
  });
});
