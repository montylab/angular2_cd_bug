import {Game} from "../game/game.model";
export class Room {
	constructor(public id = -1, public name = 'unnamed', public players = [], public games: Game[] = []) {
	}

	getPlayerScore(name: string) {
		return this.games.reduce((acc, x: Game) => acc + x.scores[name], 0);
	}

	getPlayers() {
		return this.players;
	}

	addGame(scores) {
		this.games.push(new Game(~~(Math.random() * 1e6), scores));
		this.rearrange();
	}

	rearrange() {
		const shortList = [];
		for (let player of this.players) {
			const score = this.getPlayerScore(player);
			shortList.push({score: score, name: player});
		}
		shortList.sort((a, b) => {
			return a.score - b.score;
		});

		this.players = shortList.map(x => x.name);
	}
}