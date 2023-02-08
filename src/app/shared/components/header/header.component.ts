import { Component, EventEmitter, OnInit, Output, OnChanges, SimpleChanges, Input } from '@angular/core';
import { AuthService } from 'src/app/authentication/Services/auth.service';
import { CLIENT_CONFIG } from 'src/config/config';
import { SharedService } from '../../services/shared/shared.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnChanges {
  
  @Input() public isSideNavOpen = true;

  public loginName = '';
  public isLogout = false;
  public config:any;
  public SessionUser:any;

  @Output() public isNav:EventEmitter<any>=new EventEmitter();

  constructor( private authService:AuthService, private sharedServices:SharedService) { }

  ngOnInit(): void {
    this.config = CLIENT_CONFIG;
    const storage = localStorage.getItem('SessionUser');
    if(storage) {
      this.SessionUser = JSON.parse(storage);
    }
    this.loginName = this.SessionUser.email;
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.isSideNavOpen = changes['isSideNavOpen'].currentValue
  }

  public toggleSideNav() {
    this.isSideNavOpen = !this.isSideNavOpen;
    this.isNav.emit(this.isSideNavOpen)
  }

  public logout(){
    this.authService.logout()
  }
  
  public sortTitle(value:string)
  {
    this.sharedServices.sort('Title',value)
  }

  public sortTime(value:string)
  {
    this.sharedServices.sort('Time',value)  
  }
}
