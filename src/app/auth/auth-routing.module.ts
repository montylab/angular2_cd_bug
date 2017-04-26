import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {SigninComponent} from "./signin/signin.component";


const routes = [
	{path: 'signin', component: SigninComponent},
	{path: 'signout', component: SigninComponent}
];

@NgModule({
	imports: [
		RouterModule.forChild(routes)
	],
	exports: [
		RouterModule
	]
})
export class AuthRoutingModule {}