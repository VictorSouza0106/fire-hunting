import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  @Input() isOpen: Boolean = false;
  // TODO: Implementar direcao da sidebar -> Default (Down)

  constructor() {}

  ngOnInit(): void {}
}
