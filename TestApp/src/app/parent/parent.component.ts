import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  template: `
    <p>This is Parent!</p>
    <app-child
      [x]="'x in parent'"
      [todoTitleProp]="todoTitle"
      ></app-child>

    <!-- <input type="text" [value]="'test'"> -->
  `,
  styles: [
  ]
})
export class ParentComponent implements OnInit {
  todoTitle = "jdsfkdjkfdTodo1"

  constructor() {

  }

  ngOnInit(): void {
  }

}
