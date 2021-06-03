import { Component, OnInit } from '@angular/core';
import { ITodo } from "../interfaces/todo";


@Component({
  selector: 'app-todo-list',
  template: `
    <p>todo-list works!</p>
    <ul *ngFor="let todo of todos">
      <app-todo-item [todo]="todo"></app-todo-item>
    </ul>
  `,
  styles: [
  ]
})
export class TodoListComponent implements OnInit {
  todos:ITodo[]

  constructor() { }

  ngOnInit(): void {
    this.todos = [
      {
        id: 1,
        title: "Todo1",
        completed: false
      },
      {
        id: 2,
        title: "Todo2",
        completed: true
      }
    ]
  }

}
