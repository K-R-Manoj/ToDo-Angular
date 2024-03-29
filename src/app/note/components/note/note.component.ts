import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { GoogleTagManagerService } from 'src/app/core/services/google-tag-manager/google-tag-manager.service';
import { NoteService } from '../../Services/note/note.service';
import { AddNoteComponent } from '../add-note/add-note.component';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {
  @Input() public note:any;
  @Output() public updateORdelete:EventEmitter<boolean> = new EventEmitter();

  public NoteTimeIST:any;
  
  constructor(private dialog:MatDialog, private noteService:NoteService, private gtmService:GoogleTagManagerService) { }
  
  ngOnInit(): void {
    this.dateConverter();
  }

  public onUpdate() {
    const dialogRef = this.dialog.open(AddNoteComponent, { data:{notevalue:this.note},autoFocus: false });
    dialogRef.afterClosed().subscribe((val) => {
      const { isUpdateNoteSuccessful = false } = val || {};
      if ( isUpdateNoteSuccessful) {
        this.updateORdelete.emit(true);
      }
    });
  }

  public onDelete() {
    this.noteService.deleteNote(this.note._id).subscribe((res)=>{
      this.updateORdelete.emit(true);
      this.gtmService.gtm_DeleteNote();
      this.gtmService.gtm_CreateTrash();
    })
  }

  public dateConverter() {
    this.NoteTimeIST = new Date(this.note.createdAt);
  }
}
