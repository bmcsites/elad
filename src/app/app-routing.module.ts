import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '@components/home/home.component';
import {TeamsGameListComponent} from '@components/teams-game-list/teams-game-list.component';
import {StadiumsListComponent} from '@components/stadiums-list/stadiums-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'teams/:name', component: TeamsGameListComponent},
  { path: 'stadiums/:name', component: StadiumsListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
