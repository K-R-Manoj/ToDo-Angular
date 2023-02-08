import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared/services/shared/shared.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  public filtredStatus:string ='';

  constructor(public sharedService:SharedService) { }

  ngOnInit(): void {
  }

  public search(value:string) {
    this.sharedService.search(value);
  }
}
