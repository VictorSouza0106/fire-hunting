import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LobbyService } from '../services/lobby.service';

@Injectable({
  providedIn: 'root',
})
export class LobbyGuard implements CanActivate {
  constructor(private lobbyService: LobbyService, private router: Router) {}

  canActivate() {
    if (this.lobbyService.lobby) return true;
    else this.router.navigateByUrl('/home');
    return false;
  }
}
