import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrashListComponent } from './Pages/trash-list/trash-list.component';

const routes: Routes = [
  {
    path:'',
    component: TrashListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrashRoutingModule { }
