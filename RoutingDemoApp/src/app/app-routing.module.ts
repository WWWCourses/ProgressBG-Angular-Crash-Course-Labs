import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from "./about/about.component";
import { ContactsComponent } from "./contacts/contacts.component";
import { HomeComponent } from "./home/home.component";

const routes: Routes = [
  // root: "/"        => http://localhost:4200/
  // about: "about" => http://localhost:4200/about
  // about: "/about" => http://localhost:4200/todo/1
  // todo/1
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "about",
    component: AboutComponent
  },
  {
    path: "contacts",
    component: ContactsComponent
  },
  // {
  //   path: "**",
  //   component: PageNotFound
  // },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
