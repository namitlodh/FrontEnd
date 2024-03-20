import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteiconsComponent } from './noteicons.component';

describe('NoteiconsComponent', () => {
  let component: NoteiconsComponent;
  let fixture: ComponentFixture<NoteiconsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NoteiconsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NoteiconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
