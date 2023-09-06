import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TodosService } from '../shared/todos.service';
import { Todo } from '../shared/todos.model';
import { Router } from '@angular/router';
import { NotificationService } from '../shared/notification.service';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {

  todo: Todo | any ; 
  showValidationErrors: boolean = false


  constructor(
    private todoService:TodosService,
     public router: Router,
     public notificationService:NotificationService){}

  OnsubmitForm(form: NgForm):any {
    if (form.invalid) return this.showValidationErrors = true

    let todo =  new Todo(form.value.text)
    this.todoService.addTodo(todo)
    this.router.navigateByUrl("/todos")
    this.notificationService.showText(("todo added"))
  }
  

  ngOnInit(): void {
    
  }

}
