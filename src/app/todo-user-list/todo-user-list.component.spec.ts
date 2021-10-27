import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoUserListComponent } from './todo-user-list.component';

describe('TodoComponent', () => {
  let component: TodoUserListComponent;
  let fixture: ComponentFixture<TodoUserListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoUserListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoUserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
