import { Routes } from "@angular/router";
import { HomeComponent } from "./home.component";



export default [
    {
        path     : '',
        component: HomeComponent,
		children: [

		]
    },
] as Routes;

