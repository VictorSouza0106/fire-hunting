import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ILobby, IUser } from 'src/app/helpers/interfaces';
import { LobbyService } from 'src/app/services/lobby.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-lobby',
  templateUrl: './lobby.component.html',
  styleUrls: ['./lobby.component.scss'],
})
export class LobbyComponent implements OnInit {
  public lobby: ILobby;
  public users: IUser[];
  public currentUser: IUser;

  constructor(
    private lobbyService: LobbyService,
    private userService: UserService,
    private router: Router
  ) {
    this.lobby = this.lobbyService.lobby;
    this.users = this.lobby?.users;
    this.currentUser = this.userService.currentUser;
  }

  ngOnInit(): void {
    this.lobbyService.startLobbyListener();

    this.lobbyService.lobbySubject.subscribe((SocketMessage) => {
      switch (SocketMessage.type) {
        case 'LobbyChanged':
          this.users = SocketMessage.data.users;
          break;
        case 'DisconnectLobby':
          this.router.navigateByUrl('/home');
          break;
        default:
          break;
      }
    });
  }

  chooseCharacter() {
    this.lobbyService
      .removeUserFromLobby(this.currentUser.username)
      .subscribe();

    this.router.navigateByUrl('/character-select');
  }
}
