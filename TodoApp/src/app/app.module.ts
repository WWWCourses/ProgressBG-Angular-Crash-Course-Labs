import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoItemComponent } from './todo-list/todo-item/todo-item.component';



@NgModule(


  {
    declarations: [
      AppComponent,
      HeaderComponent,
      AddTodoComponent,
      TodoListComponent,
      TodoItemComponent
    ],
    imports: [
      BrowserModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
  }


)
export class AppModule { }
