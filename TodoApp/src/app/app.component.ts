import { Component } from '@angular/core';

@Component(
	{
	selector: `app-root`,
	template: `
		<app-header></app-header>
		<app-add-todo></app-add-todo>
		<app-todo-list></app-todo-list>
	`,
	styles: []
}
)
export class AppComponent {
	title = 'IVA';
}


