import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router, RouterModule} from "@angular/router";
import {RoomsService} from "../room/rooms.service";
import {NgForm, FormGroup, FormControl, FormArray, Validators} from "@angular/forms";

@Component({
	selector: 'app-add-score',
	templateUrl: './add-score.component.html',
	styleUrls: ['./add-score.component.css']
})
export class AddScoreComponent implements OnInit {
	players: string[];
	playersFA: FormArray;
	gameId: number;
	form: FormGroup;

	constructor(private route: ActivatedRoute, private router: Router, private roomsService: RoomsService) {
	}

	ngOnInit() {
		this.route.params.subscribe((params: Params) => {
			this.gameId = params.id;
			const room = this.roomsService.getRoom(this.gameId);
			this.players = room.getPlayers();

			this.createForm();
		});
	}

	createForm() {
		this.playersFA = new FormArray([]);

		for (let i = 0; i < this.players.length; i++) {
			this.playersFA.push(
				new FormGroup({
					'name': new FormControl(this.players[i], Validators.required),
					'score': new FormControl(0, Validators.required)
				})
			)
		}

		this.form = new FormGroup({
			'playersFA': this.playersFA
		});

	}

	onSubmit() {
		console.log(this.form.value);
		const room = this.roomsService.getRoom(this.gameId);

		const score = {};
		const v = this.form.value['playersFA'];
		for (let i=0; i<v.length; i++) {
			score[v[i].name] = +v[i].score;
		}

		room.addGame(score);

		this.router.navigate(['../'], {relativeTo: this.route});
	}
}
