import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { ITodo } from "../../shared/todo";
import { TodosService } from "../../shared/todos.service";


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit,AfterViewChecked {
  todos:ITodo[]=[]

  constructor( private _todosService:TodosService) { }

  ngOnInit(): void {
    this.todos = this._todosService.getTodos();
  }

  ngAfterViewChecked(){
    // console.log(`AfterViewChecked triggerd`);
    console.log('Current todos:');
    console.dir(this.todos)
  }
}
