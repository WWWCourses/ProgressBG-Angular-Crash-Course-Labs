import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { ITodo } from '../../shared/todo';
import { TodosService } from "../../shared/todos.service";
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit,AfterViewChecked {
  todos:ITodo[]=[]

  constructor( private _todosService:TodosService) { }

  compareByTitle(a:ITodo,b:ITodo) {
    if (a.title < b.title)
      return -1;
    if (a.title > b.title)
      return 1;
    return 0;
  }

  ngOnInit() {
    this._todosService
      .fetchTodos()
      .pipe(map(todos => todos.sort(this.compareByTitle)))
      .subscribe( data=> this.todos = data)
  }



  ngAfterViewChecked(){
    // console.log(`AfterViewChecked triggerd`);
    console.log('Current todos:');
    console.dir(this.todos)
  }
}
