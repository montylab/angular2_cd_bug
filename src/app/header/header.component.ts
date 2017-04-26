import {Component, OnInit} from '@angular/core';
import {AuthService} from "../auth/auth.service";

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
	isAuth = false;
	username: string;

	constructor(private authService: AuthService) {}

	ngOnInit() {
		this.authService.onAuthStateChange.subscribe((isAuth) => {
			this.username = this.authService.getUsername();
			this.isAuth = isAuth;
			console.log('fires subject - ', 'isAuth: ' + isAuth, 'name: '+ this.username);
			console.log('context: ', this);
		});

		this.authService.emitter.subscribe((isAuth) => {
			this.username = this.authService.getUsername();
			this.isAuth = isAuth;
			console.log('fires emitter - ', 'isAuth: ' + isAuth, 'name: '+ this.username);
			console.log('context: ', this);
		});
	}
}
