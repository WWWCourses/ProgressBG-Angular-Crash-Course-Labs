import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
    <p>This is Child!</p>
    <span>x from parent: {{x}}</span>
    <hr>
    <input type="text" [(ngModel)]="todo">
    <div>todo: {{todo}}</div>

  `,
  styles: [
  ]
})
export class ChildComponent implements OnInit {
  @Input() x=""
  y:number = 5
  todo="";

  constructor() {
    console.log(`ChildComponent Constructor`);
    // console.log(`y = ${this.y}`)
    // console.log(`x = ${this.x}`)
  }

  ngOnInit(): void {
    this.todo = "THis is data from server";
    console.log(`ChildComponent OnInit`);
  }
  ngOnChanges(){
    console.log(`ChildComponent OnCnahges`);
  }
  // TODO: implent all ng Hooks

}
