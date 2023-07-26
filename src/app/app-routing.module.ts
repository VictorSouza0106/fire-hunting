import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterSelectComponent } from './pages/character-select/character-select.component';
import { LobbyComponent } from './pages/lobby/lobby.component';

const routes: Routes = [
  {
    path: 'character-select',
    component: CharacterSelectComponent,
  },
  {
    path: 'lobby',
    component: LobbyComponent,
  },
  {
    path: '**',
    redirectTo: '/lobby',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
