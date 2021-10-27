import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatSelectChange } from '@angular/material/select';


import { TodoService } from 'src/app/todo.service';
import { Todo } from '../interfaces';

@Component({
  selector: 'app-todo-item-list',
  templateUrl: './todo-item-list.component.html',
  styleUrls: ['./todo-item-list.component.less']
})
export class TodoItemListComponent implements OnInit {
  todoList: Todo[] = [];

  constructor(
    private route: ActivatedRoute,
    public todoService: TodoService
  ) {}

  toggleCompleted(todo: Todo) {
    todo.completed = !todo.completed;
  }

  toggleSort(event: MatSelectChange) {
    let sort = event.value;

    if (sort === 'id') {
      this.todoList.sort((todoA: Todo, todoB: Todo) => todoA.id - todoB.id);
    } else {
      this.todoList.sort((todoA: Todo, todoB: Todo) => {
        let titleA = todoA.title.toUpperCase();
        let titleB = todoB.title.toUpperCase();

        if (titleA < titleB) return -1;
        if (titleA > titleB) return 1;

        return 0;
      });
    };
  }

  deleteItem(event: Event, todo: Todo) {
    event.stopPropagation();
    this.todoList.splice(this.todoList.indexOf(todo), 1);
    this.todoService.deleteTodoItem(todo.id).subscribe();
  }
  
  ngOnInit(): void {
    let id = +this.route.snapshot.paramMap.get('id')!;

    this.todoService.getTodoList(id).subscribe((todoList) => (this.todoList = todoList));
  }

}
