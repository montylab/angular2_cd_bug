import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";

import {RoomListComponent} from "./room-list/room-list.component";
import {RoomComponent} from "./room/room.component";
import {AddScoreComponent} from "./add-score/add-score.component";

const routes = [
	{path: 'room/:id/add', component: AddScoreComponent},
	{path: 'room/:id', component: RoomComponent},
	{path: 'rooms', component: RoomListComponent},
	{path: '', redirectTo: 'rooms', pathMatch: 'full'},
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes)
	],
	exports: [
		RouterModule
	]
})
export class AppRoutingModule {}