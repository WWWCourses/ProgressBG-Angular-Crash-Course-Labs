import { Component, OnInit, Input } from '@angular/core';
import { ITodo } from "../interfaces/todo";

@Component({
  selector: 'app-todo-item',
  template: `
    <li>{{todo.id}}</li>
  `,
  styles: [
  ]
})
export class TodoItemComponent implements OnInit {
  @Input() todo:ITodo

  constructor() { }

  ngOnInit(): void {
  }
}


// Can't bind to 'todo' since it isn't a known property of 'app-todo-item'.
// 1. If 'app-todo-item' is an Angular component and it has 'todo' input, then verify that it is part of this module.
// 2. If 'app-todo-item' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.
// 3. To allow any property add 'NO_ERRORS_SCHEMA' to the '@NgModule.schemas' of this component.
