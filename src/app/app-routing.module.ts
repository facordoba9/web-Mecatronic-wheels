import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/**RUTAS**/
import { loginRoute } from './auth/login/login.routing';

const routes: Routes = [
	loginRoute,


	/*Redirec*/
	{ path: '**', redirectTo: 'login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
