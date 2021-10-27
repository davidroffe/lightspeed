import { Component, OnInit } from '@angular/core';

import { TodoStoreService } from 'src/app/todo-store.service';

@Component({
  selector: 'app-todo-user-list',
  templateUrl: './todo-user-list.component.html',
  styleUrls: ['./todo-user-list.component.less']
})
export class TodoUserListComponent implements OnInit {
  constructor(public todoStoreService: TodoStoreService) { }

  ngOnInit(): void {
    this.todoStoreService.fetchTodoUsers();
  }

  formatPhone(phone: string): string {
    let phoneRx = /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/gm;
    let match = phoneRx.exec(phone);

    return `(${match![2]})${match![3]}-${match![4]}`;
  }
}
