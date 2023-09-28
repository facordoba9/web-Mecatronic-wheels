import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { MaterialModule } from 'src/app/shared/modules/materila.moduel';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss'],
	standalone: true,
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		RouterModule,
		MaterialModule,
		RouterLink],
})
export class LoginComponent {
	public formLogin: UntypedFormGroup;

	constructor(
		private _formBuilder: UntypedFormBuilder,
		private _router: Router,
	){
		this.formLogin = this._formBuilder.group({
			user: ['', [Validators.required, Validators.email]],
			password: ['', [Validators.required]],
		});
	}


	login() {
		this.formLogin.markAllAsTouched();

		if(this.formLogin.invalid) {
			return;
		}

		//TODO	llamar Servicio de logueo

		//TODO validar si es correcto llamar lo siguiente:
		this._router.navigate(['admin']);
	}
}
