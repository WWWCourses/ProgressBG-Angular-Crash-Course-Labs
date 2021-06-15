import { Component, OnInit  } from '@angular/core';

@Component({
  selector: 'app-nav',
  template: `
  <nav>
    <ul>
      <li><a routerLink="home" routerlinkActive="active">Home</a></li>
      <li><a routerLink="about" routerlinkActive="active">About</a></li>
      <li><a routerLink="contacts" routerlinkActive="active">Contacts</a></li>
    </ul>
  </nav>
  `,
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

