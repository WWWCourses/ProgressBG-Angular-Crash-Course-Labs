import { Component, OnInit } from '@angular/core';
import { TodosService } from "../services/todos.service";

@Component({
  selector: 'app-add-todo',
  template: `
    <div class="todo-add">
      <input type="text" AppAutofocus placeholder="add new todo ..." #todoInput>
      <button class="todo-add-btn" (click)="clickHandler(todoInput)">Add</button>
    </div>
  `,
  styles: [
  ]
})
export class AddTodoComponent implements OnInit {

  constructor(private _TodosService:TodosService) { }

  ngOnInit(): void {
  }

  // TODO: Add example of passing event to the parent, without using service
  clickHandler(todoInput:HTMLInputElement){
    this._TodosService.addTodo(todoInput.value)
    todoInput.value = ""
    todoInput.focus()
  }

}
