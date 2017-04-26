# Variable didn't render new value after update via asynchronous action

##to test: 
open console and try to sign in using google: you'll see correct updated value in the console, but there is no UI update.

####header.component.html
```
<li *ngIf="isAuth" class="user">
                    
{{username}}
                    
<img [src]="authService.getUserPhotoUrl()" class="userpic" alt="user photo">
            
</li>
```

should show the username and userpic, if **isAuth** is true 

####header.component.ts
```
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
```
I used two ways to set **isAuth** (Rx/Subject and EventEmitter), both functions were called (console.log as a proof),
but header component UI isn't updating.
