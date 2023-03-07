import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { GoogleTagManagerService } from 'src/app/core/services/google-tag-manager/google-tag-manager.service';
import { NoteService } from '../../Services/note/note.service';

interface Tag {
  value: string;
  viewValue: string;
}

interface Color {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.scss']
})
export class AddNoteComponent implements OnInit {

  Tags: Tag[] = [
    {value: 'Work', viewValue: 'Work'},
    {value: 'Personal', viewValue: 'Personal'},
    {value: 'Home', viewValue: 'Home'},
    {value: 'Others', viewValue: 'Others'},
  ];

  Colors: Color[] = [
    {value: '#f28b82', viewValue: 'Light Red'},
    {value: '#fbbc04', viewValue: 'LightOrange'},
    {value: '#fff475', viewValue: 'Light Yellow'},
    {value: '#ccff90', viewValue: 'Light Green'},
    {value: '#a7ffeb', viewValue: 'Light Teal'},
    {value: '#d7aefb', viewValue: 'Light Purple'},
  ];

  public AddNotesForm:FormGroup|any;
  public isAddNoteSuccessful:boolean = false;
  public isUpdateNoteSuccessful:boolean = false;

  constructor( 
    private dialogRef: MatDialogRef<AddNoteComponent>, 
    @Inject(MAT_DIALOG_DATA) public data: {togglevalue: string, notevalue:{Title:string,Tag:string,Description:string,Color:string,_id?:string}},
    private noteService:NoteService,
    private gtmService:GoogleTagManagerService ) { }

  ngOnInit(): void {

    this.AddNotesForm = new FormGroup({
      'Title':new FormControl(this.data ? this.data.notevalue.Title : null, Validators.required),
      'Tag':new FormControl(this.data ? this.data.notevalue.Tag : null,Validators.required),
      'Description': new FormControl(this.data ? this.data.notevalue.Description : null,[Validators.required]),
      'Color':new FormControl(this.data ? this.data.notevalue.Color : null, Validators.required),
      'Time':new FormControl(Date.now())
    })
  }

  public onAddNoteSubmit(value:any)  
  {
    this.noteService.addNotes(value).subscribe((res)=>{
      this.isAddNoteSuccessful = true;
      this.gtmService.gtm_AddNote();
      this.onClose()
    },(err)=>{
      this.isAddNoteSuccessful = false;
    })
  }

  public onUpdateNoteSubmit(value:any) {
    this.noteService.updateNote(value).subscribe((res)=>{
      this.isUpdateNoteSuccessful = true;
      this.gtmService.gtm_UpdateNote();
      this.onClose();
    },(err)=>{
      this.isUpdateNoteSuccessful = false;
    })
  }

  public AddorUpdateUser() {
    if(this.data) {
      let UpdatedNoteValue = {...this.data.notevalue , ...this.AddNotesForm.value}
      this.onUpdateNoteSubmit(UpdatedNoteValue)
    } else {
      this.onAddNoteSubmit(this.AddNotesForm.value)
    }
  }

  public onClose() {
    this.dialogRef.close({
      isAddNoteSuccessful: this.isAddNoteSuccessful,
      isUpdateNoteSuccessful:this.isUpdateNoteSuccessful,
    });
  }
}
