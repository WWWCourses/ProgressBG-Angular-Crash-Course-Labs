import { Component, OnInit } from '@angular/core';
import { TodosService } from "../services/todos.service";

@Component({
  selector: 'app-add-todo',
  templateUrl:'./add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {

  constructor(private _TodosService:TodosService) { }

  ngOnInit(): void {
  }

  clickHandler(todoInput:HTMLInputElement){
    this._TodosService.addTodo(todoInput.value)
    todoInput.value = ""
    todoInput.focus()
  }

}
