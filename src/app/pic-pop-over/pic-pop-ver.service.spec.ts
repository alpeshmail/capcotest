import { TestBed, inject } from '@angular/core/testing';

import { PicPopVerService } from './pic-pop-ver.service';

describe('PicPopVerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PicPopVerService]
    });
  });

  it('should be created', inject([PicPopVerService], (service: PicPopVerService) => {
    expect(service).toBeTruthy();
  }));
});
