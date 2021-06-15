import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.css']
})
export class TodoEditComponent implements OnInit {
  todoId:number

  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.todoId = parseInt(this.route.snapshot.paramMap.get('id'));
  }



}
