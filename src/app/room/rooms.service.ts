import {Injectable} from '@angular/core';
import {Room} from "./room.model";
import {Game} from "../game/game.model";

@Injectable()
export class RoomsService {
	rooms: Room[] = [
		new Room(0, 'gambling', ['me', 'you', 'she'], [
			new Game(1, {me: 10, you: 0, she: 99}),
			new Game(2, {me: 78, you: 0, she: 18}),
			new Game(3, {me: 0,  you: 1, she: 8 }),
		]),
		new Room(1, 'All stars', ['Lennon', 'Jackson', 'Stylsky'], [
			new Game(4, {Lennon: 110, Jackson: 53, Stylsky: 0}),
			new Game(5, {Lennon: 12, Jackson: 0, Stylsky: 19}),
			new Game(6, {Lennon: 0, Jackson: 11, Stylsky: 37}),
		]),
		new Room(2, 'The Best Is Yet To Come', ['Jerry', 'Micky', 'Tom', 'Bender', 'Kitty'], [
			new Game(7, {Jerry: 110, Micky: 53, Tom: 0, Bender: 0, Kitty: 99}),
			new Game(8, {Jerry: 12, Micky: 0, Tom: 19, Bender: 0, Kitty: 18}),
			new Game(9, {Jerry: 0, Micky: 11, Tom: 37, Bender: 1, Kitty: 8 }),
		])
	];

	constructor() {
	}

	getRooms() {
		return this.rooms;
	}

	getRoom(id: number) {
		return this.rooms.find((x:Room) => x.id==id)
	}


}
