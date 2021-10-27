import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TodoUserListComponent } from "./todo-user-list/todo-user-list.component";
import { TodoItemListComponent } from "./todo-item-list/todo-item-list.component";

const routes: Routes = [
  { path: '', component: TodoUserListComponent },
  { path: 'item-list/user/:id', component: TodoItemListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
