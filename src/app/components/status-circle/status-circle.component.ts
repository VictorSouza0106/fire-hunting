import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-status-circle',
  templateUrl: './status-circle.component.html',
  styleUrls: ['./status-circle.component.scss']
})
export class StatusCircleComponent implements OnInit {

  @Input() statusName: string;
  @Input() statusValue: Number | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
