import {Component, OnInit} from '@angular/core';
import {Room} from "../room/room.model";
import {RoomsService} from "../room/rooms.service";

@Component({
	selector: 'app-room-list',
	templateUrl: './room-list.component.html',
	styleUrls: ['./room-list.component.css']
})
export class RoomListComponent implements OnInit {
	rooms: Room[];

	constructor(private roomsService: RoomsService) {
	}

	ngOnInit() {
		this.rooms = this.roomsService.getRooms();
	}

}
