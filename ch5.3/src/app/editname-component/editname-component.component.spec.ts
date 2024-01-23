import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditnameComponentComponent } from './editname-component.component';

describe('EditnameComponentComponent', () => {
  let component: EditnameComponentComponent;
  let fixture: ComponentFixture<EditnameComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditnameComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditnameComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
