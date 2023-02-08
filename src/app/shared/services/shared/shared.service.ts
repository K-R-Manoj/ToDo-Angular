import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  public searchString:string='';
  public sortItem:string='';
  public sortType:string=''
  public searchStringChanged = new Subject<string>();
  public sortTypeChanged = new Subject<Array<string>>();

  constructor() { }

  public search(value:string) {
    this.searchString = value
    this.searchStringChanged.next(this.searchString)
  }
  public sort(item:string, type:string) {
    this.sortItem = item;
    this.sortType = type;
    this.sortTypeChanged.next([this.sortItem, this.sortType])
  }

  public sortItems(Value:Array<Object>,item:string,type:string):any {
    if(Value)
    {
     if(item==='Title' && type==='A-Z')
     {
       return Value.sort((a:any,b:any)=>{
         if(a[item].toLowerCase()>b[item].toLowerCase())
         {
           return 1;
         }
         else
         {
           return -1;
         }
       })
     }
     if(item==='Title' && type==='Z-A')
     {
       return Value.sort((a:any,b:any)=>{
         if(a[item].toLowerCase()<b[item].toLowerCase())
         {
           return 1;
         }
         else
         {
           return -1;
         }
       })
     }
      
      if(item==='Time' && type==='Oldest')
      {
        return Value.sort((a:any,b:any)=>{
          if(a[item] > b[item])
          {     
            return 1;
          }
          else
          {
            return -1
          }
        })
      }
      if(item==='Time' && type==='Newest')
      {
        return Value.sort((a:any,b:any)=>{
          if(a[item] < b[item])
          {
            return 1;
          }
          else
          {
            return -1
          }
        })
      }
    }
  }  
}
