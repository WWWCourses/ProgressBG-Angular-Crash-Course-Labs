import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompBComponent } from './comp-b/comp-b.component';

console.log('Module b is loaded');


@NgModule({
  declarations: [
    CompBComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    CompBComponent
  ]
})
export class ModuleBModule { }
