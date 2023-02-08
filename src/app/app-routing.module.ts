import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth/auth.guard';

const routes: Routes = [

  {
    path:'home', 
    loadChildren: () => import('./home/home.module').then(m=>m.HomeModule),
    canActivate:[AuthGuard],
  },
  {
    path:'trash',
    loadChildren: () => import('./trash/trash.module').then(m=>m.TrashModule),
    canActivate:[AuthGuard],
  },
  {
    path:'note',
    loadChildren: () => import('./note/note.module').then(m=>m.NoteModule),
    canActivate:[AuthGuard],
  },
  {
    path: 'callback',
    loadChildren: () => import('./authentication/authentication.module').then(m=>m.AuthenticationModule)
  },
  {
    path:'',
    redirectTo: 'callback',
    pathMatch:'full'
  },
  {
    path: '**',
    redirectTo: 'callback',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,  {
    preloadingStrategy: PreloadAllModules,
    scrollPositionRestoration: 'enabled',
    relativeLinkResolution: 'legacy',
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
