import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  @Input() isOpen: Boolean = false;
  // TODO: Implementar direcao da sidebar -> Default (Down)

  @Output() onBack: EventEmitter<void> = new EventEmitter()

  constructor() { }

  ngOnInit(): void {

  }

  backSidebar(){
    this.onBack.emit();
  }

}
