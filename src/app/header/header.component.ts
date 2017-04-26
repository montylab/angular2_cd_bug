import {Component, OnInit} from '@angular/core';
import {AuthService} from "../auth/auth.service";

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
	isAuth = false;
	username: string = 'micky';

	constructor(private authService: AuthService) {}

	ngOnInit() {
		this.authService.onAuthStateChange.subscribe((isAuth) => {
			this.username = this.authService.getUsername();
			this.isAuth = isAuth;
			console.log('fires subject', isAuth);
			console.log(this);
		});

		this.authService.emitter.subscribe((isAuth) => {
			this.username = this.authService.getUsername();
			this.isAuth = isAuth;
			console.log('fires emit', isAuth);
			console.log(this);
		});

		// setInterval(()=>{
		// 	console.log(this.isAuth);
		// }, 1000);
	}
}
