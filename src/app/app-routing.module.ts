import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";

const routes = [
	{path: '', redirectTo: 'signin', pathMatch: 'full'},
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