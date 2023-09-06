import { Component,OnInit } from '@angular/core';
import { BookmarksService } from '../shared/bookmarks.service';
import { Bookmarks } from '../shared/bookmarks.model';

@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.css']
})
export class BookmarksComponent implements OnInit{

  bookmarks:Bookmarks[]=[]

  constructor(private bookmarkService:BookmarksService){}

  ngOnInit(): void {
    this.bookmarks = this.bookmarkService.getBookmarks()
  }

}
