import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BComponentComponent } from './b-component/b-component.component';
import { CComponent } from './b-component/c/c.component';

@NgModule({
  declarations: [
    AppComponent,
    BComponentComponent,
    CComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
