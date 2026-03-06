import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PalleteList } from './pallete-list';

describe('PalleteList', () => {
  let component: PalleteList;
  let fixture: ComponentFixture<PalleteList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PalleteList],
    }).compileComponents();

    fixture = TestBed.createComponent(PalleteList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
