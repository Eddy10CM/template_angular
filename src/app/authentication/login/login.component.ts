import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { AuthService } from '../../shared/services/auth.service'
import { IUser } from '../../shared/models/iuser'

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styles: [],
})
export class LoginComponent implements OnInit {
	constructor(private router: Router, private auth: AuthService) {}

	ngOnInit(): void {}

	doLogin() {
		this.router.navigate(['/menu'])
		const u: IUser = {
			Nombre: 'Eddy',
			Apellido: 'Moreno',
		}
		this.auth.login(u)
	}
}
