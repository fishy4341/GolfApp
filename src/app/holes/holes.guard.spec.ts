import { TestBed, async, inject } from '@angular/core/testing';

import { HolesGuard } from './holes.guard';

describe('HolesGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HolesGuard]
    });
  });

  it('should ...', inject([HolesGuard], (guard: HolesGuard) => {
    expect(guard).toBeTruthy();
  }));
});
