import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes-demo',
  templateUrl: './pipes-demo.component.html',
  styleUrls: ['./pipes-demo.component.css']
})
export class PipesDemoComponent implements OnInit {
  price = 2.34
  userName = "aDa"

  curentDate = new Date();

  constructor() { }

  ngOnInit(): void {
  }

}
