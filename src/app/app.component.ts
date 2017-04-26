import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase';
import {AuthService} from "./auth/auth.service";

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
	constructor(private authService: AuthService) {}

	ngOnInit() {
		// Initialize Firebase
		const config = {
			apiKey: "AIzaSyAt5wL7EVYLFXTWjpEqf6tQLvni5pfFTKs",
			authDomain: "unos-239c4.firebaseapp.com",
			databaseURL: "https://unos-239c4.firebaseio.com",
			projectId: "unos-239c4",
			storageBucket: "unos-239c4.appspot.com",
			messagingSenderId: "806702241348"
		};
		firebase.initializeApp(config);
		this.authService.init();

	}
}
