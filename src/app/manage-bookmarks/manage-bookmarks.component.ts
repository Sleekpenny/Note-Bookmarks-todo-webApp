import { Component, OnInit } from '@angular/core';
import { Bookmarks } from '../shared/bookmarks.model';
import { BookmarksService } from '../shared/bookmarks.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage-bookmarks',
  templateUrl: './manage-bookmarks.component.html',
  styleUrls: ['./manage-bookmarks.component.css']
})
export class ManageBookmarksComponent implements OnInit {

  bookmarks:Bookmarks[] | any

  constructor(private bookmarkService:BookmarksService, public router:Router){}

  ngOnInit(): void {
    this.bookmarks = this.bookmarkService.getBookmarks()
  }



}
