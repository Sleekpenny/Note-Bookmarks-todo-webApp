import { Component, OnInit} from '@angular/core';
import { Todo } from '../shared/todos.model';
import { TodosService } from '../shared/todos.service';
import { Router } from '@angular/router';
import { animate, style, transition, trigger } from '@angular/animations';
import { NotificationService } from '../shared/notification.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
  animations: [
    trigger("todoItemAmine", [
      transition(":leave", [
        animate(200, style({
          opacity: 0.5,
          dispay:"block", 
          height: 0,
          marginBottom: 0
        }))
      ])
    ])
  ]
})
export class TodosComponent implements OnInit{

  todos: Todo []=[]

  constructor (
    private todoService:TodosService, 
    private router:Router,
    private notificationService: NotificationService){}


ngOnInit(): void {
  this.todos = this.todoService.getTodos()
}

onClick(todo:Todo){
  this.todoService.updateTodo(todo.id, {completed: !todo.completed})
}

onClickEmmiter(todo:Todo){
  this.router.navigate(["/todos", todo.id])
}

onDeleteClick(todo: Todo){
  this.todoService.deletedTodo(todo.id)
  this.notificationService.showText(("This todo deleted!"))
}

trackById(index, item:Todo){
  return item.id
}
}
