import { Component, OnInit } from '@angular/core';
import { ILobby, IUser } from 'src/app/helpers/interfaces';
import { LobbyService } from 'src/app/services/lobby.service';

@Component({
  selector: 'app-lobby',
  templateUrl: './lobby.component.html',
  styleUrls: ['./lobby.component.scss'],
})
export class LobbyComponent implements OnInit {
  public lobby: ILobby;

  public users: IUser[];

  constructor(private lobbyService: LobbyService) {
    this.lobby = this.lobbyService.lobby;
    this.users = this.lobby.users;
  }

  ngOnInit(): void {
    this.lobbyService.startLobbyListener();

    this.lobbyService.lobbySubject.subscribe((lobby) => {
      console.log(lobby);

      this.users = lobby.users;
    });
  }
}
