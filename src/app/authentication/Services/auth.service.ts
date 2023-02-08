import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API } from 'src/app/core/constants/api.constants';
import { DataService } from 'src/app/core/services/data/data.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _http: HttpClient, private dataService:DataService) { }

  public async authorizeUser() {
    const authorizationParams = await this.authorizationParams()
    window.location.href = `https://todo-app-users.auth.us-east-1.amazoncognito.com/oauth2/authorize?${this.constructQueryParam(authorizationParams)}`;
  }

  private async authorizationParams() {

    return {
      client_id: '30qr4s2bfme2sv2lda73c3f0vh',
      response_type: 'code',
      scope: (['email', 'openid', 'profile', 'aws.cognito.signin.user.admin']).join('+'), //After added scope to get custom attribute, you need to give permission App client in Attribute read and write permissions(edit the permission)
      redirect_uri: 'http://localhost:4200/callback',
    }
  }

  private constructQueryParam(query:{[key:string]:any}) {
    return Object.entries(query)
              .filter(([,value])=> typeof value !== 'undefined')
              .map(([key,value])=>{
                if(Array.isArray(value) && value.length)
                {
                  return value
                          .filter(v => typeof v!== 'undefined')
                          .map(v=>`${key}[]=${v}`)
                          .join('&');
                }
                return `${key}=${value}`
              })
              .reduce((a,b)=>`${a}&${b}`)
  }

  public intermediateServerLogin(Params:any):Observable<any>
  {
    const params={
      code:Params,
    }
    return this._http.post( API.INTERMEDIATE_SERVER_LOGIN,params );
  }

  public async logout() {
    const authorizationParams = await this.authorizationParams()
    localStorage.removeItem('SessionUser');
    window.location.href = `https://todo-app-users.auth.us-east-1.amazoncognito.com/logout?${this.constructQueryParam(authorizationParams)}`;
    this.dataService.userLogout.next();
  }
}
