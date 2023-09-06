import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookmarksComponent } from './bookmarks/bookmarks.component';
import { NotesComponent } from './notes/notes.component';
import { TodosComponent } from './todos/todos.component';
import { NoteTyperComponent } from './note-typer/note-typer.component';
import { EditNoteComponent } from './edit-note/edit-note.component';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { EditButtonComponent } from './edit-button-todo/edit-button.component';
import { AddBookMarkComponent } from './add-book-mark/add-book-mark.component';
import { ManageBookmarksComponent } from './manage-bookmarks/manage-bookmarks.component';
import { EditBookmarksComponent } from './edit-bookmarks/edit-bookmarks.component';

const routes: Routes = [
{path: "bookmarks", component:BookmarksComponent, data: {tabs:1}},
{path: "notes", component: NotesComponent, data: {tabs:2}},
{path: "todos", component:TodosComponent, data: {tabs:3}},
{path: "notes/notesInfo", component:NoteTyperComponent},
{path: "notes/:id", component:EditNoteComponent},
{path: "todos/addTodo", component:AddTodoComponent},
{path: "todos/:id", component:EditButtonComponent},
{path: "bookmarks/addBookmarks", component:AddBookMarkComponent},
{path: "bookmarks/manage", component:ManageBookmarksComponent, children:[
  {path: ":id", component: EditBookmarksComponent }
]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
