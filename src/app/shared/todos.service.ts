import { Injectable, OnDestroy } from '@angular/core';
import { Todo } from './todos.model';
import { Subscription, fromEvent } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodosService implements OnDestroy{
  todos: Todo[]=[]
  storageSub: Subscription

  constructor() {
    this.loadState()

   this.storageSub =  fromEvent(window, "storage").subscribe((event: StorageEvent)=>{
     if (event.key === "todos") this.loadState()
    })
  }

  ngOnDestroy(): void {
    if (this.storageSub) this.storageSub.unsubscribe()
  }

  getTodos() {
    return this.todos
  }

  getTodo(id: string | null ){
    this.todos.find(t=>{
      return t.id === id
    })
  }

  addTodo(todo:Todo){
    this.todos.push(todo)
    this.saveState()
  }

  updateTodo(id: string, updateTodoField: Partial<Todo>) {
    const todo:any = this.getTodo(id)
    Object.assign(todo, updateTodoField)
    this.saveState()
  }

  deletedTodo(id:string ):any{
    const index = this.todos.findIndex(t=> t.id === id)
    if (index === -1) return
    this.todos.splice(index, 1)
    this.saveState()
  }

  saveState(){
    localStorage.setItem("todos", JSON.stringify(this.todos))
  }

  loadState(){
    const loadStorageDate =  JSON.parse(localStorage.getItem("todos"))
    if (!loadStorageDate) return 
    this.todos.length = 0;
    this.todos.push(...loadStorageDate)
  }
}
