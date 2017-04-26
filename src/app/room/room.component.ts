import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, RouterModule} from "@angular/router";
import {RoomsService} from "./rooms.service";
import {Game} from "../game/game.model";
import {Room} from "./room.model";

@Component({
	selector: 'app-room',
	templateUrl: './room.component.html',
	styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {
	id: number;
	room: Room;


	constructor(private route: ActivatedRoute, private roomsService: RoomsService) {}

	ngOnInit() {
		this.route.params.subscribe((params: Params) => {
			this.id = +params.id;
			this.room = this.roomsService.getRoom(this.id);
		});
	}
}
