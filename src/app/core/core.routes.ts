import { Routes } from "@angular/router";
import { LayoutComponent } from "./layout/layout.component";
import { homeRouting } from "./home/home.routing";
import { wheelAdvertisingRouting } from "./wheels-advertising/wheels-advertising.routing";


export default [
	{
		path: '',
		component: LayoutComponent,
		children: [
			homeRouting,
			wheelAdvertisingRouting,

			/*Redirec*/
			{ path: '**', redirectTo: '', pathMatch: 'full' },
		]
	},
] as Routes;

