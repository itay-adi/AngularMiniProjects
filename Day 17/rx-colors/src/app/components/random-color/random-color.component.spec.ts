import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomColorComponent } from './random-color.component';

describe('RandomColorComponent', () => {
  let component: RandomColorComponent;
  let fixture: ComponentFixture<RandomColorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RandomColorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
