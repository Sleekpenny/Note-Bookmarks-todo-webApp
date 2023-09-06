import { Component, Input, OnInit} from '@angular/core';
import { Bookmarks } from '../shared/bookmarks.model';

@Component({
  selector: 'app-bookmark-tile',
  templateUrl: './bookmark-tile.component.html',
  styleUrls: ['./bookmark-tile.component.css']
})
export class BookmarkTileComponent implements OnInit{

    @Input()
  bookmark!: Bookmarks;

  tileIconSource!: string;
  faviconError:boolean = false

  constructor(){}

  ngOnInit(): void {
    this.tileIconSource = this.bookmark.url.origin + '/favicon.ico'
  }

}
