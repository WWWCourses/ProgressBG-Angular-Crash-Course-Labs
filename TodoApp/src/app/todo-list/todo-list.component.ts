import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { ITodo } from "../interfaces/todo";
import { TodosService } from "../services/todos.service";


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
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
