import { Component, OnInit } from '@angular/core';
// import { dir } from 'console';

@Component({
  selector: 'app-data-bindings',
  templateUrl: './data-bindings.component.html',
  styleUrls: ['./data-bindings.component.css']
})
export class DataBindingsComponent implements OnInit {
  styleName = "vip"
  bgStyle = "background-color:red"

  bgColor = "green";

  dataId = 5

  userName: string = ""

  constructor() { }

  ngOnInit(): void {
  }

  logUser(userName:string){
    console.log(`user name: ${userName}`);
  }

  keypressHandler(e:Event){
    console.dir(e)
  }


  // onInput(el:HTMLInputElement){
  //   console.log(`value: ${el.value}`)

  // }

  // TODO: why value is not updated
  onInput(txt:string){
    console.log(txt);

  }
}
