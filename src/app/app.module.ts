import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharacterSelectComponent } from './pages/character-select/character-select.component';
import { LobbyComponent } from './pages/lobby/lobby.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { StatusCircleComponent } from './components/status-circle/status-circle.component';
import { MainMenuComponent } from './pages/main-menu/main-menu.component';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatDialogModule } from '@angular/material/dialog';
import { SimpleDialogComponent } from './dialogs/simple-dialog/simple-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';

export const environment = {
  production: false,
  socketUrl: 'http://localhost:3000',
};

@NgModule({
  declarations: [
    AppComponent,
    CharacterSelectComponent,
    LobbyComponent,
    SidebarComponent,
    StatusCircleComponent,
    MainMenuComponent,
    SimpleDialogComponent,

    //
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
