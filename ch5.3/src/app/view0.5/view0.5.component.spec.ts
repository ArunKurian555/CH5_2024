import { ComponentFixture, TestBed } from '@angular/core/testing';

import { View05Component } from './view0.5.component';

describe('View05Component', () => {
  let component: View05Component;
  let fixture: ComponentFixture<View05Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [View05Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(View05Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
