import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { LoginComponent } from './Pages/login/login.component';

@NgModule({
  imports: [CommonModule, AuthenticationRoutingModule, SharedModule, ],
  declarations: [
    LoginComponent,
  ],
})
export class AuthenticationModule { }
