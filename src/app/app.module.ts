import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharacterSelectComponent } from './pages/character-select/character-select.component';
import { LobbyComponent } from './pages/lobby/lobby.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { StatusCircleComponent } from './components/status-circle/status-circle.component';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';

export const environment = {
  production: false,
  socketUrl: 'http://localhost:3000'
};

const config: SocketIoConfig = {
	url: environment.socketUrl, // socket server url;
	options: {
		transports: ['websocket']
	}
}

@NgModule({
  declarations: [
    AppComponent,
    CharacterSelectComponent,
    LobbyComponent,
    SidebarComponent,
    StatusCircleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SocketIoModule.forRoot(config),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
