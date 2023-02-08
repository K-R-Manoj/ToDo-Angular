import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { HttpClientModule } from '@angular/common/http';
import { SideNavigationComponent } from './components/side-navigation/side-navigation.component';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchComponent } from './components/search/search/search.component';




@NgModule({
  declarations: [
    SideNavigationComponent,
    HeaderComponent,
    SearchComponent,
  ],
  imports: [
    MaterialModule,
    CommonModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports:[
    MaterialModule,
    HttpClientModule,
    SideNavigationComponent,
    HeaderComponent,
    FormsModule,
    ReactiveFormsModule,
    SearchComponent,
  ]
})
export class SharedModule { }
