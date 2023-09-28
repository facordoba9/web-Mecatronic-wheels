import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { homeInfo } from 'src/app/core/home/home.routing';
import { wheelAdvertisingInfo, wheelAdvertisingRouting } from 'src/app/core/wheels-advertising/wheels-advertising.routing';

const imports = [
	CommonModule,
	RouterModule,
];

@Component({
	selector: 'app-navigation',
	templateUrl: './navigation.component.html',
	styleUrls: ['./navigation.component.scss'],
	standalone: true,
	imports
})
export class NavigationComponent {

	menuItems = [
		/**Agregar las demas opciones */
		wheelAdvertisingInfo
	];

	constructor() {

	};

}
