import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { TodoListComponent } from './todo-list/todo-list.component';



@NgModule(


  {
    declarations: [
      AppComponent,
      HeaderComponent,
      AddTodoComponent,
      TodoListComponent
    ],
    imports: [
      BrowserModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
  }


)
export class AppModule { }
