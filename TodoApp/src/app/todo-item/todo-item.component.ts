import { Component, OnInit, Input } from '@angular/core';
import { ITodo } from "../interfaces/todo";

@Component({
  selector: 'app-todo-item',
  template: `
    <li>
      <span>{{todo.id}}.</span>
      <span>{{todo.title}}</span>
    </li>
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

