import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharacterSelectComponent } from './pages/character-select/character-select.component';
import { LobbyComponent } from './pages/lobby/lobby.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { StatusCircleComponent } from './components/status-circle/status-circle.component';

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
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
