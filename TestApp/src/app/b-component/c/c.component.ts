import { Component, OnInit } from '@angular/core';

@Component({
  selector: '#child',
  templateUrl: './c.component.html',
  styleUrls: ['./c.component.css'],
  inputs:[]
})
export class CComponent implements OnInit {
  userName:string = "Ada"
  x:number=0;

  constructor() { }

  ngOnInit(): void {
  }

  odd(){
    if(this.x%2){
      return "odd"
    }else{
      return "even"
    }
  }

}