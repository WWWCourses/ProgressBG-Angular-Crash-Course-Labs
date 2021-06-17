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
      return 1;
    if (a.title > b.title)
      return -1;
    return 0;
  }

  ngOnInit() {
    this._todosService
      .fetchTodos()
      .pipe( map(todos => todos.sort(this.compareByTitle)) )
      .subscribe( data => this.todos = data)
  }


  ngAfterViewChecked(){
    console.log('Current todos:');
    console.dir(this.todos)
  }

  addTodo(todoTitle:string){
    console.log(`addTodo emited: ${todoTitle}`);

    // reffer: https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-assertions
    const newTodo = <ITodo>{
      'title':todoTitle,
      'completed': false
    }
    this._todosService.addTodo(newTodo).subscribe(todo => (this.todos.push(todo)));
  }
}
