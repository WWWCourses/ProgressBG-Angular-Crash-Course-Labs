import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from './app.component';
import { BComponentComponent } from './b-component/b-component.component';
import { DirectivesDemoComponent } from './directives-demo/directives-demo.component';
import { PipesDemoComponent } from './pipes-demo/pipes-demo.component';
import { DataBindingsComponent } from './data-bindings/data-bindings.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';

import { ModuleAModule } from '../modules/module-a/module-a.module';
import { ModuleBModule } from '../modules/module-b/module-b.module';

@NgModule({
  declarations: [
    AppComponent,
    BComponentComponent,
    DirectivesDemoComponent,
    PipesDemoComponent,
    DataBindingsComponent,
    ParentComponent,
    ChildComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ModuleAModule,
    ModuleBModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
