import { async, TestBed } from '@angular/core/testing';
import { AnimationsLibModule } from './animations-lib.module';

describe('AnimationsLibModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AnimationsLibModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(AnimationsLibModule).toBeDefined();
  });
});
