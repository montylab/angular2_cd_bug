import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {GameComponent} from './game/game.component';
import {GameListComponent} from './game-list/game-list.component';
import {RoomComponent} from './room/room.component';
import {RoomListComponent} from './room-list/room-list.component';
import {AppRoutingModule} from "./app-routing.module";
import {RoomsService} from "./room/rooms.service";
import { AddScoreComponent } from './add-score/add-score.component';
import { HeaderComponent } from './header/header.component';
import {AuthService} from "./auth/auth.service";
import {AuthModule} from "./auth/auth.module";

@NgModule({
	declarations: [
		AppComponent,
		GameComponent,
		GameListComponent,
		RoomComponent,
		RoomListComponent,
		AddScoreComponent,
		HeaderComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		ReactiveFormsModule,
		HttpModule,
		AppRoutingModule,
		AuthModule
	],
	providers: [RoomsService, AuthService],
	bootstrap: [AppComponent]
})
export class AppModule {
}
