import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetnoteComponent } from './getnote.component';

describe('GetnoteComponent', () => {
  let component: GetnoteComponent;
  let fixture: ComponentFixture<GetnoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GetnoteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GetnoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
