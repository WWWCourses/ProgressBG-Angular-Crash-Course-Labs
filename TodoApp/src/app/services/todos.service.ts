import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  // todos:ITodo[]

  constructor() { }

  // this.todos = getTodos()

  getTodos(){
    return [
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
  }

  //TASK: define next methods:

  // addTodo:
    // param: todoTitle
    // add new todo object at hte end of todos

  //


}



