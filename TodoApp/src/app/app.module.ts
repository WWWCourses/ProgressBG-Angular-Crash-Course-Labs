import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { AutofocusDirective } from './autofocus.directive';
import { TodoEditComponent } from './todo-edit/todo-edit.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule(


  {
    declarations: [
      AppComponent,
      HeaderComponent,
      AddTodoComponent,
      TodoListComponent,
      TodoItemComponent,
      AutofocusDirective,
      TodoEditComponent,
    ],
    imports: [
      BrowserModule,
      AppRoutingModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
  }


)
export class AppModule { }
