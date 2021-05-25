import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives-demo',
  templateUrl: './directives-demo.component.html',
  styleUrls: ['./directives-demo.component.css']
})
export class DirectivesDemoComponent implements OnInit {
  userName="Maria"
  userAge = 70
  myVar = "A"

  colors = ["red", "green","blue"]

  style = "error"

  styles = {
    adult:this.isAdult(),
    junior: !this.isAdult(),
    common:true
  }

  constructor() {
    this.forOfDemo()
  }

  ngOnInit(): void {
  }

  forOfDemo(){
    for( let color of this.colors){
      console.log(color);
    }
  }

  isAdult(){
    return this.userAge>18? true:false
  }

}
