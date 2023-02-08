import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../Services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(
    private route:ActivatedRoute, 
    private router:Router,
    private authService: AuthService 
    ) {}

  ngOnInit(): void {
    this.listenParams()
  }

  private listenParams()
  {
    this.route.queryParams.subscribe((params:any)=>{ this.validateCode(params);})
  }

  private validateCode({ error = '', code = '' })
  {
    if (error) {
      // Delaying logout just to give user some time to read the error message.this.translate.instant('liveViewComponentConnected')
      setTimeout(() => {
        this.authService.logout();
      }, 3000);
    }
    else if(code)
    {
      const params={ code };
        
      this.authService.intermediateServerLogin(params.code).subscribe((res:any)=>{
        const result = {...res};
        const {cognitoAccessToken='', token='', tokenExpiresAt=''} = {...res};
        const {email=''} = result.userDetails.body;
        
        this.router.navigateByUrl('home')
        if(result.userDetails?.body.error === "invalid_token")
        {
          this.authService.logout()
        }
        else
        {
          const SessionUser = {
            "cognitoAccessToken":cognitoAccessToken,
            "token":token,
            "tokenExpiresAt":tokenExpiresAt,
            "email":email
          }
          localStorage.setItem("SessionUser",JSON.stringify(SessionUser));
          this.router.navigateByUrl('home')
        }
      })
    }
    else
    {
      this.authService.authorizeUser()
    }
  }

}
