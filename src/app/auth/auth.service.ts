import {Injectable, OnInit, EventEmitter} from '@angular/core';
import * as firebase from 'firebase';

import {Subject} from "rxjs/Subject";

@Injectable()
export class AuthService {
    user;
    token;
    tokenGoogle: string;
    onAuthStateChange = new Subject<boolean>();
    emitter = new EventEmitter<boolean>();

    constructor() {}

    init() {
        firebase.auth().onAuthStateChanged((user) => {
            this.user = user;

            this.onAuthStateChange.next(!!user);
            this.emitter.emit(!!user);

            console.info('Auth state changed, current is - ' + (user ? 'SIGNED IN' : 'SIGNED OUT'));
        });
    }

    singInGoogle() {
        const provider = new firebase.auth.GoogleAuthProvider();

        provider.addScope('https://www.googleapis.com/auth/plus.login');
        firebase.auth().signInWithPopup(provider).then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            this.tokenGoogle = result.credential.accessToken;
        }).catch(function (error: any) {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            const credential = error.credential;

            console.error(errorCode, errorMessage, email, credential);
        });
    }

    signout() {
        firebase.auth().signOut();
    }

    getUsername(): string {
        return this.user && this.user.displayName;
    }

    getUserPhotoUrl(): string {
        return this.user && this.user.photoURL;
    }
}
