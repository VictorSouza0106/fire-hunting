import { Injectable } from '@angular/core';
import { io, Socket } from 'socket.io-client';

@Injectable({
  providedIn: 'root',
})
export class SocketService {
  private socket: any;

  constructor() {
    // Adapte a URL conforme necessário
    this.socket = io('http://localhost:3000');
  }

  emit(eventName: string, data: any): void {
    this.socket.emit(eventName, data);
  }

  on(eventName: string, callback: (data: any) => void): void {
    this.socket.on(eventName, callback);
  }
}
