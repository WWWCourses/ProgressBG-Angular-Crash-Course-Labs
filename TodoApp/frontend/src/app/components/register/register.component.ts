import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from "../../shared/user";


class UserData implements User{
  constructor(public email:string, public password:string){

  }
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @ViewChild('regForm') regForm:any
  user1:User

  constructor() {
    this.user1 = new UserData('Pesho@gmail.com', '1234')
  }

  ngOnInit(): void {
  }

  submitForm(regForm:any){
    console.dir(regForm)
  }

}
