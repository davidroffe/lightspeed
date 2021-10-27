import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs';
import { User, Todo } from './interfaces';

@Injectable({ providedIn: 'root' })
export class TodoService {
  constructor(private http: HttpClient) {}

  getTodoUsers(): Observable<User[]> {
    const url = 'https://jsonplaceholder.typicode.com/users';

    return this.http.get<User[]>(url);
  }

  getTodoList(id: number): Observable<Todo[]> {
    const url = 'https://jsonplaceholder.typicode.com/todos';

    return this.http.get<Todo[]>(url, {
      params: new HttpParams().set('userId', id.toString()),
    });
  }

  deleteTodoItem(id: number): Observable<any> {
    const url = 'https://jsonplaceholder.typicode.com/todos/' + id.toString();
    
    return this.http.delete<Todo[]>(url);
  }
}