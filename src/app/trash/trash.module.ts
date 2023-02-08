import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrashRoutingModule } from './trash-routing.module';
import { SharedModule } from '../shared/shared.module';
import { TrashListComponent } from './Pages/trash-list/trash-list.component';
import { TrashComponent } from './components/trash/trash.component';


@NgModule({
  declarations: [
    TrashListComponent,
    TrashComponent
  ],
  imports: [
    CommonModule,
    TrashRoutingModule,
    SharedModule
  ]
})
export class TrashModule { }
