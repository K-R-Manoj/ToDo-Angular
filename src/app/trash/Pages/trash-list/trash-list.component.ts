import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared/services/shared/shared.service';
import { TrashService } from '../../services/trash/trash.service';

@Component({
  selector: 'app-trash-list',
  templateUrl: './trash-list.component.html',
  styleUrls: ['./trash-list.component.scss']
})
export class TrashListComponent implements OnInit {
  public TrashNotes=[];
  public searchstring: string='';
  public sortItem:string='Title';
  public sortType:string='A-Z';
  public loading:boolean = false;

  constructor(private trashServices:TrashService, private sharedServices:SharedService) { }

  ngOnInit(): void {
    this.getTrashs();
    this.sharedServices.searchStringChanged.subscribe((value)=>{
      this.searchstring = value;
      this.search(value);
    })
    this.sharedServices.sortTypeChanged.subscribe((value)=>{
      this.sortItem = value[0];
      this.sortType = value[1];
      this.sharedServices.sortItems(this.TrashNotes,this.sortItem,this.sortType);
    })
  }

  public search(value:string) {
    if(value)
    {
      this.TrashNotes = this.TrashNotes.filter((Trash: { Title: string })=>{
       return  Trash.Title.toLocaleLowerCase().includes(value)
      })
    } else {
      this.getTrashs();
    }
  }

  public getTrashs() {
    this.loading = true;
    this.trashServices.getTrashs().subscribe((res)=>{
      this.TrashNotes = res;
      this.loading = false;
    })
  }

  public refresh(value:boolean)
  {
    if(value)
    {
      this.getTrashs();
    }
  }
}