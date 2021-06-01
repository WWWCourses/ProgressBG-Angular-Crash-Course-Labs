import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { BComponentComponent } from './b-component/b-component.component';
import { CComponent } from './b-component/c/c.component';
import { DirectivesDemoComponent } from './directives-demo/directives-demo.component';
import { HighlightDirective } from './custom-directives/highlight.directive';
import { PipesDemoComponent } from './pipes-demo/pipes-demo.component';
import { DataBindingsComponent } from './data-bindings/data-bindings.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';

@NgModule({
  declarations: [
    AppComponent,
    BComponentComponent,
    CComponent,
    DirectivesDemoComponent,
    HighlightDirective,
    PipesDemoComponent,
    DataBindingsComponent,
    ParentComponent,
    ChildComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
