import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlowersBackground } from './flowers-background';

describe('FlowersBackground', () => {
  let component: FlowersBackground;
  let fixture: ComponentFixture<FlowersBackground>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlowersBackground],
    }).compileComponents();

    fixture = TestBed.createComponent(FlowersBackground);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
