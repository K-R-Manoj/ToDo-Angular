import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { API } from 'src/app/core/constants/api.constants';

@Injectable({
  providedIn: 'root'
})
export class TrashService {

  constructor(private http: HttpClient) { }

  public getTrashs():Observable<any>
  {
    return this.http.get(API.GET_TRASH);
  } 

  public deleteTrash(params:string):Observable<any>
  {
    return this.http.delete(API.DELETE_TRASH(params));
  }

  public retriveNote(params:any):Observable<any>
  {
    return this.http.post(API.RETRIVE_NOTE,params);
  }
}
