import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, catchError, map, of } from 'rxjs';
import { ILobby, ISocketMessage } from '../helpers/interfaces';
import { SocketService } from './socketio.service';

@Injectable({
  providedIn: 'root',
})
export class LobbyService extends BaseService {
  public lobby: ILobby;
  public lobbySubject: Subject<ISocketMessage> = new Subject<ISocketMessage>();

  constructor(private http: HttpClient, private socket: SocketService) {
    super();
  }

  public createLobby(): Observable<any> {
    return this.http.post(this.baseURL + '/lobby', null);
  }

  public getLobby(roomCode: string): Observable<any> {
    return this.http.get(this.baseURL + '/lobby/' + roomCode);
  }

  public startLobbyListener() {
    this.socket.on(this.lobby.roomCode, (SocketMessage) => {
      console.log('SOCKET MESSAGE ', SocketMessage);

      this.lobbySubject.next(SocketMessage);
    });
  }

  public addUserToLobby(username: string) {
    return this.http.put(
      this.baseURL + '/lobby/addUser/' + username,
      this.lobby
    );
  }

  public removeUserFromLobby(username: string) {
    console.log(username);

    return this.http.put(
      this.baseURL + '/lobby/removeUser/' + username,
      this.lobby
    );
  }
}
