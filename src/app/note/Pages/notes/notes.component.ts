import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SharedService } from 'src/app/shared/services/shared/shared.service';
import { AddNoteComponent } from '../../components/add-note/add-note.component';
import { NoteService } from '../../Services/note/note.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {
  public Notes:any = [];
  public searchstring: string='';
  public sortItem:string='Title';
  public sortType:string='A-Z';
  public loading:boolean = false;

  constructor( private dialog:MatDialog, private noteService:NoteService, private sharedService:SharedService ) { }

  ngOnInit(): void {
    this.getNotes();
    this.sharedService.searchStringChanged.subscribe((value)=>{
      this.searchstring = value;
      this.searchNote(this.searchstring)
    })
    this.sharedService.sortTypeChanged.subscribe((value)=>{
      this.sortItem = value[0];
      this.sortType = value[1];
      this.sharedService.sortItems(this.Notes,this.sortItem,this.sortType);    
    })
  }
  public searchNote(value:string) {
    if(value) {
      this.Notes = this.Notes.filter((Note: { Title: string })=>{
       return  Note.Title.toLocaleLowerCase().includes(value)
      })
    } else {
      this.getNotes();
    }
  }

  public getNotes() {
    this.loading = true;
    this.noteService.getNotes().subscribe((res)=>{
      this.Notes = res;
      this.loading = false;
    })
  }

  public onAddNote() {
    const dialogRef = this.dialog.open(AddNoteComponent, { autoFocus: false });
    dialogRef.afterClosed().subscribe((val) => {
      const { isAddNoteSuccessful = false } = val || {};
      if (isAddNoteSuccessful) {
        this.getNotes();
      }
    });
  }

  public refresh(value:boolean) {
    if(value) {
      this.getNotes();
    }
  }
}
