import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MaterialModule } from 'src/app/shared/modules/materila.moduel';
import { NavigationComponent } from './components/navigation/navigation.component';
import { HeaderComponent } from './components/header/header.component';
import { ContentComponent } from './components/content/content.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';

const imports = [
	CommonModule,
	MaterialModule,
	RouterModule,

	/*COMPONENTS*/
	NavigationComponent,
	HeaderComponent,
	ContentComponent,
	FooterComponent
];

@Component({
	selector: 'app-layout',
	templateUrl: './layout.component.html',
	styleUrls: ['./layout.component.scss'],
	standalone: true,
	imports
})
export class LayoutComponent {

}
