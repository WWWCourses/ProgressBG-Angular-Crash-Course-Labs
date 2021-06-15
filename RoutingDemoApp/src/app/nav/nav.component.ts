import { Component, OnInit  } from '@angular/core';

@Component({
  selector: 'app-nav',
  template: `
  <nav>
    <ul>
      <li><a [routerlink]="home" routerlinkActive="active">Home</a></li>
      <li><a [routerlink]="about" routerlinkActive="active">About</a></li>
      <li><a [routerlink]="contacts" routerlinkActive="active">Contacts</a></li>
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

