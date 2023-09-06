import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BaseToggleComponent } from './base-toggle/base-toggle.component';
import { BookmarksComponent } from './bookmarks/bookmarks.component';
import { NotesComponent } from './notes/notes.component';
import { TodosComponent } from './todos/todos.component';
import { BookmarkTileComponent } from './bookmark-tile/bookmark-tile.component';
import { NoteTyperComponent } from './note-typer/note-typer.component';
import { FormsModule } from '@angular/forms';
import { EditNoteComponent } from './edit-note/edit-note.component';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { EditButtonComponent } from './edit-button-todo/edit-button.component';
import { AddBookMarkComponent } from './add-book-mark/add-book-mark.component';
import { ManageBookmarksComponent } from './manage-bookmarks/manage-bookmarks.component';
import { EditBookmarksComponent } from './edit-bookmarks/edit-bookmarks.component';
import { NotificationComponent } from './notification/notification.component';



 
@NgModule({
  declarations: [
    AppComponent,
    BaseToggleComponent,
    BookmarksComponent,
    NotesComponent,
    TodosComponent,
    BookmarkTileComponent,
    NoteTyperComponent,
    EditNoteComponent,
    AddTodoComponent,
    EditButtonComponent,
    AddBookMarkComponent,
    ManageBookmarksComponent,
    EditBookmarksComponent,
    NotificationComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserAnimationsModule,
    FormsModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
