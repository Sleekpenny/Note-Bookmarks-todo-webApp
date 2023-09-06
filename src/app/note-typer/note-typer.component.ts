import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Note } from '../shared/note.model';
import { NoteService } from '../shared/note.service';
import { Router } from '@angular/router';
import { NotificationService } from '../shared/notification.service';

@Component({
  selector: 'app-note-typer',
  templateUrl: './note-typer.component.html',
  styleUrls: ['./note-typer.component.css']
})
export class NoteTyperComponent implements OnInit{
  
  showValidationErrros:boolean = false

  constructor(public noteService:NoteService, 
    private router:Router, 
    public notificationService:NotificationService
    ){}

  OnsubmitForm(form:NgForm):any{
    
    if(form.invalid) return this.showValidationErrros = true

    let note = new Note(form.value.title, form.value.content)
    this.noteService.addNote(note)

    this.router.navigateByUrl("/notes")
    this.notificationService.showText(("Note added successfully!"))
     
  }
  
  ngOnInit(): void {
    
  }
}
