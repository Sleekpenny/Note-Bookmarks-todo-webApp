import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseToggleComponent } from './base-toggle.component';

describe('BaseToggleComponent', () => {
  let component: BaseToggleComponent;
  let fixture: ComponentFixture<BaseToggleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BaseToggleComponent]
    });
    fixture = TestBed.createComponent(BaseToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
