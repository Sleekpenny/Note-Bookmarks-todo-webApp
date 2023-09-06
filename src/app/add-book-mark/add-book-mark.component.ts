import { Component, OnInit } from '@angular/core';
import { Bookmarks } from '../shared/bookmarks.model';
import { BookmarksService } from '../shared/bookmarks.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { NotificationService } from '../shared/notification.service';

@Component({
  selector: 'app-add-book-mark',
  templateUrl: './add-book-mark.component.html',
  styleUrls: ['./add-book-mark.component.css']
})
export class AddBookMarkComponent implements OnInit{
  
  bookmarks: Bookmarks | undefined
  showValidationErrros:boolean = false

  constructor(
    private bookMarkService:BookmarksService, 
    public router: Router, 
    public notificationService:NotificationService)
    {}
  
  ngOnInit(): void {
    
  }

  OnsubmitForm(form: NgForm):any {
    let bookmark =  new Bookmarks(form.value.name, form.value.url)
    this.bookMarkService.addBookmarks(bookmark)
    this.router.navigateByUrl("/bookmarks")
    this.notificationService.showText(("Bookmark Added"))
  }
}
