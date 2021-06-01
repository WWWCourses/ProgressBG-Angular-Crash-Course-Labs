import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
    <p>This is Child!</p>
    <span>x from parent: {{x}}</span>
    <span>{{todoTitleProp}}</span>
  `,
  styles: [
  ]
})
export class ChildComponent implements OnInit {
  @Input() x=""
  @Input() todoTitleProp=""


  constructor() { }

  ngOnInit(): void {
  }

}
