import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <header><h1>Simple Todo App</h1></header>
  `,
  styles: [
  ]
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
