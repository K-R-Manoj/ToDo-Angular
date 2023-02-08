import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public userLogout: Subject<void> = new Subject<void>();
  constructor() { }
}
