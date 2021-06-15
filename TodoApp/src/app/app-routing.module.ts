import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoEditComponent } from "./todo-edit/todo-edit.component";
import { AppComponent } from "./app.component";

const routes: Routes = [
  {
    path: '',
    component:AppComponent
  },
  {
    path: 'todo-edit/:id',
    component: TodoEditComponent
  },
  {
    path: 'todo-edit',
    component: TodoEditComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }