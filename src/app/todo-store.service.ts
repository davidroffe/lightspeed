import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';
import { TodoService } from './todo.service';
import { User } from './interfaces';

@Injectable({ providedIn: 'root' })
export class TodoStoreService {
  constructor(private todoService: TodoService) {}
  private readonly _todoUsers = new BehaviorSubject<User[]>([]);

  readonly todoUsers$ = this._todoUsers.asObservable();

  get todoUsers(): User[] {
    return this._todoUsers.getValue();
  }

  set todoUsers(val: User[]) {
    this._todoUsers.next(val);
  }

  fetchTodoUsers() {
    this.todoService.getTodoUsers().subscribe((data: User[]) => {
      this.todoUsers = data;
    });
  }
}