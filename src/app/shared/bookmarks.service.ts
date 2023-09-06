import { Injectable, OnDestroy } from '@angular/core';
import { Bookmarks } from './bookmarks.model';
import { Subscription, fromEvent } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookmarksService implements OnDestroy{

  bookmarks: Bookmarks[]=[ ]
  storageSub: Subscription

  constructor() {
    this.loadState()

    this.storageSub =  fromEvent(window, "storage").subscribe((event: StorageEvent)=>{
      if (event.key == "bookmarks") this.loadState()
    })
   }

   ngOnDestroy(): void {
     if (this.storageSub) this.storageSub.unsubscribe()
   }

  getBookmarks(){
    return this.bookmarks
  }

  getBookmark(id:string | null){
    return this.bookmarks.find(n=> n.id === id )
  }

  addBookmarks(bookmark:Bookmarks){
    this.bookmarks.push(bookmark)
    this.saveState()
  }

  updateBookmark(id:string, updateField:Partial<Bookmarks>){
    const bookmark:any = this.getBookmark(id)
    Object.assign(bookmark, updateField)
    this.saveState()
  }

  deleteBookmarks(id:string){
    const bookmarkIndex = this.bookmarks.findIndex(b=> b.id === id )
    if (bookmarkIndex == -1) return
    this.bookmarks.splice(bookmarkIndex, 1)
    this.saveState()
  }

  saveState(){
    localStorage.setItem("bookmarks", JSON.stringify(this.bookmarks))
  }

  loadState(){
    const loadStorageDate =  JSON.parse(localStorage.getItem("bookmarks"))
    this.bookmarks.length = 0
    this.bookmarks.push(...loadStorageDate)
  }
}
