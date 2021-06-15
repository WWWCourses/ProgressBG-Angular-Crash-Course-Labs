import { Component, OnInit, Input } from '@angular/core';
import { ITodo } from "../interfaces/todo";
import { TodosService } from "../services/todos.service";

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
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

