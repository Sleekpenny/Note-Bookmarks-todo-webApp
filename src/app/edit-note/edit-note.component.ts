import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute,ParamMap } from '@angular/router';
import { NoteService } from '../shared/note.service';
import { Note } from '../shared/note.model';
import { NotificationService } from '../shared/notification.service';

@Component({
  selector: 'app-edit-note',
  templateUrl: './edit-note.component.html',
  styleUrls: ['./edit-note.component.css']
})
export class EditNoteComponent implements OnInit{
  constructor(
    public route:ActivatedRoute, 
    public noteServie:NoteService, 
    public notificationService:NotificationService){}

  note: Note | any

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap: ParamMap)=>{
      let IdMap  = paramMap.get("id")
                
     this.note = (this.noteServie.getNote(IdMap))
      this.notificationService.showText(("note edited successfully!"))
    })
  }

  OnsubmitForm(form:NgForm){

  }
}
