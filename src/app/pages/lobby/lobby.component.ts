import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lobby',
  templateUrl: './lobby.component.html',
  styleUrls: ['./lobby.component.scss'],
})
export class LobbyComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  public goToURL(URL: string): void {
    this.router.navigateByUrl(URL);
  }
}
