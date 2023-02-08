import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';

import { CLIENT_CONFIG, navigationRoutes } from 'src/config/config';

@Component({
  selector: 'app-side-navigation',
  templateUrl: './side-navigation.component.html',
  styleUrls: ['./side-navigation.component.scss']
})
export class SideNavigationComponent implements OnInit {
  @ViewChild('sidenav', { static: true }) public sideNav!: SideNavigationComponent;

  @Output() public sidenavEmit: EventEmitter<boolean> = new EventEmitter();

  @Output() public isSideNavOpen = true;

  public navigationRoutes:any = [];

  constructor() { }

  ngOnInit(): void {
    this.updateNavigationRoutes()
  }

  public getSideNavChanges(event:any) {
    this.isSideNavOpen = event
  }

  private updateNavigationRoutes(){
    this.navigationRoutes = [...navigationRoutes];
  }

  public sidenavclose(args:boolean)
  {
    this.isSideNavOpen = args;
    this.sidenavEmit.emit(args);
  }
}
