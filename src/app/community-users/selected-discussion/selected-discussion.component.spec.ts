import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedDiscussionComponent } from './selected-discussion.component';

describe('SelectedDiscussionComponent', () => {
  let component: SelectedDiscussionComponent;
  let fixture: ComponentFixture<SelectedDiscussionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectedDiscussionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectedDiscussionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
