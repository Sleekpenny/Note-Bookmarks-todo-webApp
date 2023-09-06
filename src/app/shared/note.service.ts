import { Injectable, OnDestroy } from '@angular/core';
import { Note } from './note.model';
import { Subscription, fromEvent } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoteService implements OnDestroy{

  notes: Note[] = []

  storageSub:Subscription

  constructor() 
  { this.loadState() 
    let storageSub =  fromEvent(window, "storage").subscribe((event: StorageEvent)=>{
    if (event.key  === "notes") this.loadState()
  })

  }

  ngOnDestroy(): void {
    if (this.storageSub) this.storageSub.unsubscribe()
  }

  getNotes(){
    return this.notes
  }

  getNote(id: string | null){
    this.notes.find(n =>{
      return n.id === id
    })
  }

  addNote(note:Note){
    this.notes.push(note)
    this.saveState()
  }

  updateNote (id:string, updateFields: Partial<Note>){
    const noteUpdate:any = this.getNote(id)
    Object.assign(noteUpdate, updateFields)
    this.saveState()
  }

  deleteNote(id:string){
    const deleNote = this.notes.findIndex(n=> n.id === id)
    if (deleNote ==-1) return 
    this.notes.splice(deleNote, 1)
    this.saveState()
  }

  saveState(){
    let locStorage = localStorage.setItem("notes", JSON.stringify(this.notes))
  }

  loadState(){
    try {
      const dataInStorage = JSON.parse(localStorage.getItem("notes"))
      if (!dataInStorage) return 
      this.notes.length=0
      this.notes.push(...dataInStorage)
    }catch(e){
      console.log("There was an error")
      console.log(e)
    }
   
  }

}
