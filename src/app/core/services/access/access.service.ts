import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccessService {

  constructor() { }

  public getLoginInfo() {
    const loginInfo = localStorage.getItem("SessionUser");
    let result;
    if(loginInfo) {
      result = JSON.parse(loginInfo)
    }
    return result;
  }

  public hasValidToken(): boolean {
    const { tokenExpiresAt = 0 } = this.getLoginInfo() || {};
    return tokenExpiresAt > Date.now();
  }
}
