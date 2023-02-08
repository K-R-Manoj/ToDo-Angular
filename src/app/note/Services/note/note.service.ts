import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API } from 'src/app/core/constants/api.constants';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor(private http: HttpClient) { }

  public getNotes():Observable<any>
  {
    return this.http.get(API.GET_NOTES);
  } 
  public addNotes(params:any):Observable<any>
  {
    return this.http.post(API.ADD_NOTE,params);
  } 
  public updateNote(params:any):Observable<any>
  {
    return this.http.patch(API.PATCH_NOTE,params);
  }
  public deleteNote(params:string):Observable<any>
  {
    return this.http.delete(API.DELETE_NOTE(params));
  }
}
