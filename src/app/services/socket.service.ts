import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root'
})
export class SocketService {

  constructor(private socket: Socket) { }

  	// emit event
	fetchMovies() {
		this.socket.emit('msg',"MENSAGEM");
    console.log("TT")
	}

	// listen event
	onFetchMovies() {
		return this.socket.fromEvent('fetchMovies');
	}
}
