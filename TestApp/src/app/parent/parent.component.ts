import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  template: `
    <p>This is Parent!</p>
    <app-child
      [x]="'X in parent'"
    ></app-child>
    <!-- <input type="text" [value]="'test'"> -->
  `,
  styles: [
  ]
})
export class ParentComponent implements OnInit {
  todoTitle = "Todo1"

  constructor() {
    console.log(`ParentComponent Constructor`);

  }

  ngOnInit(): void {
  }

}
