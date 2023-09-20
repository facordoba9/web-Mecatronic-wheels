import { Route, Routes } from '@angular/router';
import { LoginComponent } from './login.component';

export const loginRoute: Route = {
	path: 'login',
	loadChildren: () => import('./login.routes'),
}


