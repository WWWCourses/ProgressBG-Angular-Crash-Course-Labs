import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <h1>Simple Todo App</h1>
  `,
  styles: [
  ]
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
