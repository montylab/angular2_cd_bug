# Asyncronius update of variable didn't render new value

to test: 
1) npm install
2) ng serve
3) go to sign in page
4) open console and try to sign in using google: you'll see correct updated value in the console, but there is no UI update.

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
	}
} 
```
I used two ways to set **isAuth** (rx/Subject and EventEmitter), both functions were called (console.log as a proof),
but header UI isn't updating.
