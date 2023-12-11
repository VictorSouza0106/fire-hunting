import { Component, HostListener, OnInit } from '@angular/core';
import { WindowService } from './services/window.service';
import { SocketService } from './services/socketio.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public isMobile: boolean =
    window.innerWidth < this.windowService.MOBILE_WIDTH ? true : false;

  constructor(
    private windowService: WindowService,
    private socketService: SocketService
  ) {}

  @HostListener('window:resize', ['$event'])
  onResize(): void {
    if (window.innerWidth < this.windowService.MOBILE_WIDTH)
      this.windowService.isMobile.next(true);
    else this.windowService.isMobile.next(false);
  }

  ngOnInit() {
    this.windowService.isMobile.subscribe(
      (isMobile) => (this.isMobile = isMobile)
    );

    this.socketService.on('message', (res) => console.log('receive => ', res));
  }
}
