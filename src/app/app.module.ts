import { BrowserModule } from '@angular/platform-browser';
import {APP_INITIALIZER, NgModule} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { HomeComponent } from '@components/home/home.component';
import { HttpService } from '@services/http.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { SeListComponent } from '@components/home/se-list/se-list.component';
import { SeInfoComponent } from '@components/home/se-info/se-info.component';
import { SeHeaderComponent } from '@components/se-header/se-header.component';
import { FormsModule } from '@angular/forms';
import { StadiumsListComponent } from '@components/stadiums-list/stadiums-list.component';
import { TeamsGameListComponent } from '@components/teams-game-list/teams-game-list.component';
import { GetGamesProvider } from '@appRoot/get-games.provider';


export function GamesProviderFactory(provider: GetGamesProvider) {
  return () => provider.load();
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SeListComponent,
    SeInfoComponent,
    SeHeaderComponent,
    StadiumsListComponent,
    TeamsGameListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    AngularFontAwesomeModule,
    HttpClientModule,
    FormsModule,
    CommonModule
  ],
  providers: [
    HttpService,
    GetGamesProvider,
    { provide: APP_INITIALIZER, useFactory: GamesProviderFactory, deps: [GetGamesProvider], multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
