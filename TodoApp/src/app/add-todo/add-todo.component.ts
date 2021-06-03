import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-todo',
  template: `
    <div>
      <input type="text" name="" id="" placeholder="todo title">
      <button>Add</button>
    </div>
  `,
  styles: [
  ]
})
export class AddTodoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
