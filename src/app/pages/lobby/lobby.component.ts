import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Socket } from 'ngx-socket-io';
import { SocketService } from 'src/app/services/socket.service';
// import * as io from 'socket.io-client';

@Component({
  selector: 'app-lobby',
  templateUrl: './lobby.component.html',
  styleUrls: ['./lobby.component.scss']
})
export class LobbyComponent implements OnInit {

  constructor(
    private router: Router,
    private socketService: SocketService
  ) { }

  ngOnInit(): void {
  }

  public goToURL(URL: string):void {
    this.router.navigateByUrl(URL);
  }

  sendMessage() {
    console.log("EMIT")
    this.socketService.fetchMovies()
    this.socketService.onFetchMovies().subscribe((data: any) => console.log(data));
  }

}
