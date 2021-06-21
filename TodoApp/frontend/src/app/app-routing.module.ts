import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TodoListComponent } from "./components/todo-list/todo-list.component";
import { TodoEditComponent } from "./components/todo-edit/todo-edit.component";
import { LoginComponent } from "./components/login/login.component";
import { RegisterComponent } from "./components/register/register.component";

const routes: Routes = [
  {
    'path': '',
    'redirectTo': '',
    'pathMatch': 'full'
  },
  {
    'path':'login',
    'component':LoginComponent
  },
  {
    'path':'register',
    'component':RegisterComponent
  },
  {
    'path':'todos',
    'component':TodoListComponent
  },
  {
    'path':'todos/edit/:id',
    'component': TodoEditComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
