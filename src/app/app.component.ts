import { Component } from '@angular/core';
import { GoogleTagManagerService } from './core/services/google-tag-manager/google-tag-manager.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Todo';
  constructor(private gtmService:GoogleTagManagerService) { }

  public acceptCookies(){
    this.gtmService.gtm_updateConsent('granted');
  }
  public declineCookies(){
    this.gtmService.gtm_updateConsent('denied');
  }
}
