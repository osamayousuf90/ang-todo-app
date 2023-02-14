import { Component, OnInit } from '@angular/core';
import { Todos } from 'src/app/models/Todos';
import { Toast } from 'angular-toastify/lib/toast';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})  
export class TodosComponent implements OnInit {
    
  todos: Todos[] = []
  todoContent : string = ""


  constructor() {
  }
  
  ngOnInit(): void {
    this.todos = [
      {
      content: "Grocery",
      completed : false,  
      },
      {
        content: "Batman",
        completed : true,  
      },
    ]
  }

  togglerDone(i : number) {
    this.todos.map((res , index) => {
      if (i === index) {
        res.completed = !res?.completed
      }
    })
  }

  delete(i : number) {
   this.todos = this.todos.filter((res, index) => {
     return index !== i
   })  
  }


  addTodo() {
    if (this.todoContent.length === 0) {
      alert("Please Write")
    } else {
      this.todos.push({
        content: this.todoContent,
        completed : false
      })
      this.todoContent = ""
      
    }
  }

}
