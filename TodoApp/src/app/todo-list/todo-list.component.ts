import { Component, OnInit } from '@angular/core';
import { ITodo } from "../interfaces/todo";
import { TodosService } from "../services/todos.service";


@Component({
  selector: 'app-todo-list',
  template: `
    <p>todo-list works!</p>
    <ul>
      <!-- <app-todo-item></app-todo-item> -->
      <app-todo-item *ngFor="let todo of todos" [todo]="todo"></app-todo-item>

    </ul>
  `,
  styles: [
  ]
})
export class TodoListComponent implements OnInit {
  todos:ITodo[]

  constructor( private todoServiceObject:TodosService) { }

  ngOnInit(): void {
    this.todos = this.todoServiceObject.getTodos();
  }
}
