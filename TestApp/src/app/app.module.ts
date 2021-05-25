import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BComponentComponent } from './b-component/b-component.component';
import { CComponent } from './b-component/c/c.component';
import { DirectivesDemoComponent } from './directives-demo/directives-demo.component';
import { HighlightDirective } from './custom-directives/highlight.directive';
import { PipesDemoComponent } from './pipes-demo/pipes-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    BComponentComponent,
    CComponent,
    DirectivesDemoComponent,
    HighlightDirective,
    PipesDemoComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
