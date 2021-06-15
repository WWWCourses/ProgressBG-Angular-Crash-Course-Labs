import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts',
  template: `
    <app-nav></app-nav>
    <p>
      contacts works!
    </p>
  `,
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
