import { ComponentFixture, TestBed } from '@angular/core/testing';

import { View0Component } from './view0.component';

describe('View0Component', () => {
  let component: View0Component;
  let fixture: ComponentFixture<View0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [View0Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(View0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
