import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterSelectComponent } from './pages/character-select/character-select.component';
import { LobbyComponent } from './pages/lobby/lobby.component';
import { MainMenuComponent } from './pages/main-menu/main-menu.component';
import { LobbyGuard as LobbyGuard } from './guards/lobby-guard.guard';

const routes: Routes = [
  {
    path: `home`,
    component: MainMenuComponent,
  },
  {
    path: 'character-select',
    component: CharacterSelectComponent,
    canActivate: [LobbyGuard],
  },
  {
    path: 'lobby',
    component: LobbyComponent,
    canActivate: [LobbyGuard],
  },
  {
    path: '**',
    redirectTo: '/home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
