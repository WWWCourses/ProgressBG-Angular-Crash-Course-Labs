import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { ITodo } from "../interfaces/todo";
import { TodosService } from "../services/todos.service";


@Component({
  selector: 'app-todo-list',
  template: `
    <ul class="todo-items">
      <app-todo-item *ngFor="let todo of todos" [todo]="todo"
      [ngClass]="{'completed' : todo.completed}"
      ></app-todo-item>
    </ul>
  `,
  styles: [
  ]
})
export class TodoListComponent implements OnInit {
  todos:ITodo[]

  constructor( private _TodosService:TodosService) { }

  ngOnInit(): void {
    this.todos = this._TodosService.getTodos();
  }

  ngAfterViewChecked(){
    console.log(`AfterViewChecked triggerd`);
    console.dir(this.todos)

  }
}
