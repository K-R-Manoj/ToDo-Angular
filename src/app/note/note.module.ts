import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NoteRoutingModule } from './note-routing.module';
import { NotesComponent } from './Pages/notes/notes.component';
import { SharedModule } from '../shared/shared.module';
import { NoteComponent } from './components/note/note.component';
import { AddNoteComponent } from './components/add-note/add-note.component';


@NgModule({
  declarations: [
    NotesComponent,
    NoteComponent,
    AddNoteComponent
  ],
  imports: [
    CommonModule,
    NoteRoutingModule,
    SharedModule,
  ]
})
export class NoteModule { }
