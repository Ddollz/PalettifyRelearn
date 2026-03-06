import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorBlock } from './color-block';

describe('ColorBlock', () => {
  let component: ColorBlock;
  let fixture: ComponentFixture<ColorBlock>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColorBlock],
    }).compileComponents();

    fixture = TestBed.createComponent(ColorBlock);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
