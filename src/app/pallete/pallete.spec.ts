import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pallete } from './pallete';

describe('Pallete', () => {
  let component: Pallete;
  let fixture: ComponentFixture<Pallete>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pallete],
    }).compileComponents();

    fixture = TestBed.createComponent(Pallete);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
