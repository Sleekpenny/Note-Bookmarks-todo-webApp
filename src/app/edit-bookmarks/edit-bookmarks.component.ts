import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BookmarksService } from '../shared/bookmarks.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Bookmarks } from '../shared/bookmarks.model';
import { NotificationService } from '../shared/notification.service';

@Component({
  selector: 'app-edit-bookmarks',
  templateUrl: './edit-bookmarks.component.html',
  styleUrls: ['./edit-bookmarks.component.css']
})
export class EditBookmarksComponent implements OnInit{

  bookmark: Bookmarks| any 

  constructor(
    private bookmarkService:BookmarksService, 
    private route:ActivatedRoute, 
    public router:Router, 
    public notificationService: NotificationService)
    {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap:ParamMap)=>{
      let bookId = paramMap.get("id")
      this.bookmark = this.bookmarkService.getBookmark(bookId)
    })
  }
  onSubmitForm(form:NgForm){
    this.bookmarkService.updateBookmark(this.bookmark.id, form.value)
    this.router.navigateByUrl("/bookmarks")
    this.notificationService.showText("Bookmark Updated")
    
  }

  deleteBookmarks(){
    this.bookmarkService.deleteBookmarks(this.bookmark.id)
    this.router.navigate(["../"], {relativeTo: this.route})
  }
}
