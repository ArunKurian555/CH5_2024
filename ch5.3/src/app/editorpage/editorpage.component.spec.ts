import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorpageComponent } from './editorpage.component';

describe('EditorpageComponent', () => {
  let component: EditorpageComponent;
  let fixture: ComponentFixture<EditorpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditorpageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditorpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
