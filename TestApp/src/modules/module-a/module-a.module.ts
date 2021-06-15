import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompAComponent } from './comp-a/comp-a.component';

console.log(`ModuleAModule`);


@NgModule({
  declarations: [
    CompAComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    CompAComponent
  ]
})
export class ModuleAModule { }
