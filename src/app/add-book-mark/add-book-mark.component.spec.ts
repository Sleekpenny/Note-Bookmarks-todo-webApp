import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBookMarkComponent } from './add-book-mark.component';

describe('AddBookMarkComponent', () => {
  let component: AddBookMarkComponent;
  let fixture: ComponentFixture<AddBookMarkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddBookMarkComponent]
    });
    fixture = TestBed.createComponent(AddBookMarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
