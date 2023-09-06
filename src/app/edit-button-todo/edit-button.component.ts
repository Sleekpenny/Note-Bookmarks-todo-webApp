import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TodosService } from '../shared/todos.service';
import { Router, ActivatedRoute, ParamMap} from '@angular/router';
import { Todo } from '../shared/todos.model';
import { NotificationService } from '../shared/notification.service';

@Component({
  selector: 'app-edit-button',
  templateUrl: './edit-button.component.html',
  styleUrls: ['./edit-button.component.css']
})
export class EditButtonComponent implements OnInit{

  todo: Todo | any
  
  showValidationErrros:boolean = false;
  constructor(private todoService:TodosService,
     private router:ActivatedRoute, 
     private routerLink:Router,
     public notificationService: NotificationService) {}

  ngOnInit() {
    this.router.paramMap.subscribe((paraMap: ParamMap)=>{
      const todoId = paraMap.get("id")
      this.todo = this.todoService.getTodo(todoId)
      
    })

  }
    
  OnsubmitForm(form:NgForm):any{
    if (form.invalid) return this.showValidationErrros = true;
    
    this.todoService.updateTodo(this.todo.id, form.value.text)
    this.routerLink.navigateByUrl("/todos")
    this.notificationService.showText(("Todo edited successfully!"))
  }
}
