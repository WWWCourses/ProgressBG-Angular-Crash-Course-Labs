import { Injectable } from '@angular/core';
import { ITodo } from "../interfaces/todo";

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  todos:ITodo[] = [
    {
      id: 1,
      title: "Todo1",
      completed: false
    },
    {
      id: 2,
      title: "Todo2",
      completed: true
    },
  ]

  constructor() { }

  getTodos(){
    console.dir(this.todos)
    return this.todos
  }

  getLastId(){
    return this.todos[this.todos.length-1].id
  }

  // add new todo object at the end of todos
  addTodo(todoTitle:string){
    const newTodo:ITodo = {
      id:this.getLastId()+1,
      title:todoTitle,
      completed:false
    }

    // iep: not the differnce - if we did not change the state, Angular's change detection won't be triggered
    // this.todos = [...this.todos, newTodo]
    this.todos.push(newTodo)
  }

  removeTodo(id:number){
    const idx = this.todos.findIndex(todo => id===todo.id);
    idx>=0 && this.todos.splice(idx,1);

    // note, this won't work
    // this.todos = this.todos.filter(todo=>todo.id===id)
  }

  completeTodo(id:number){
    const idx = this.todos.findIndex(todo => id===todo.id);
    idx>=0 && (this.todos[idx].completed = !this.todos[idx].completed)
  }
}



