import { Component, OnInit, Input } from '@angular/core';
import { ITodo } from "../interfaces/todo";
import { TodosService } from "../services/todos.service";

@Component({
  selector: 'app-todo-item',
  template: `
    <li [attr.data-id]="todo.id">
      <span class="todoID">{{todo.id}}.</span>
			<span>{{todo.title}}</span>
      <div class="completeTodo">
        <i class="fas fa-check" (click)=completeHandler(todo.id)></i>
      </div>
			<div class="removeTodo">
        <i class="far fa-trash-alt" (click)=removeHandler(todo.id)></i>
      </div>
		</li>
  `,
  styles: [
  ]
})
export class TodoItemComponent implements OnInit {
  @Input() todo:ITodo

  constructor( private _TodosService:TodosService) { }

  ngOnInit(): void {
  }

  removeHandler(id:number){
    this._TodosService.removeTodo(id)
  }

  completeHandler(id:number){
    this._TodosService.completeTodo(id)
  }
}

