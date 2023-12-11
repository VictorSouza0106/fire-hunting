import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { log } from 'console';
import { map, catchError, of } from 'rxjs';
import { ILobby } from 'src/app/helpers/interfaces';
import { LobbyService } from 'src/app/services/lobby.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss'],
})
export class MainMenuComponent implements OnInit {
  constructor(
    private router: Router,
    private lobbyService: LobbyService,
    private userService: UserService
  ) {}

  public menuState: 'menu' | 'create' | 'enter' = 'menu';
  public lobby: ILobby;

  ngOnInit(): void {}

  public goToURL(URL: string): void {
    this.router.navigateByUrl(URL);
  }

  public createLobby() {
    this.menuState = 'create';
    this.lobbyService
      .createLobby()
      .pipe(
        map((res) => {
          this.lobby = res as ILobby;
          this.lobbyService.lobby = res as ILobby;
          this.userService.createDefaultUser(true);
        }),
        catchError((error) => {
          console.error('Erro na requisição:', error);
          return of(null);
        })
      )
      .subscribe();
  }

  public insertLobbyCode() {
    this.menuState = 'enter';
  }

  public backToMenu() {
    this.menuState = 'menu';
  }

  public enterLobby(roomCode?: string) {
    if (this.userService.currentUser?.isMaster) this.goToURL('/lobby');
    else {
      this.lobbyService
        .getLobby(roomCode as string)
        .pipe(
          map((res) => {
            this.userService.createDefaultUser(false);
            this.lobbyService.lobby = res;
            this.goToURL('/character-select');
          })
        )
        .subscribe();
    }
  }

  public clipCode() {
    let roomCode = this.lobby.roomCode;

    navigator.clipboard.writeText(roomCode);
  }
}
