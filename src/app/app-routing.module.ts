import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', canActivate: [AuthGuard], loadChildren: './home/home.module#HomePageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'categorias', canActivate: [AuthGuard], loadChildren: './categorias/categorias.module#CategoriasPageModule' },
  { path: 'notebooks', canActivate: [AuthGuard], loadChildren: './notebooks/notebooks.module#NotebooksPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

//canActivate: [AuthGuard]