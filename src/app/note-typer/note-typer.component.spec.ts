import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteTyperComponent } from './note-typer.component';

describe('NoteTyperComponent', () => {
  let component: NoteTyperComponent;
  let fixture: ComponentFixture<NoteTyperComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NoteTyperComponent]
    });
    fixture = TestBed.createComponent(NoteTyperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
