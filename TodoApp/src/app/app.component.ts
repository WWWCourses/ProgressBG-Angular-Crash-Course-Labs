import { Component } from '@angular/core';

@Component(
	{
	selector: `app-root`,
	template: `
		<app-header></app-header>
		<app-add-todo></app-add-todo>
		<app-todo-list></app-todo-list>
		<router-outlet></router-outlet>
	`,
	styles: [
		`
			:host{
				display:block;
				width:100%;
				height:100vh;
				background: #333;
				padding:2em;
				box-sizing:border-box;
				/* border: 5px solid red; */
			}
		`
	]
}
)
export class AppComponent {}


