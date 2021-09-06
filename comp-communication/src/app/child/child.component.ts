import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Output() sendData = new EventEmitter<string>();
  @Input() receiveTxt : string;

  constructor() { }

  ngOnInit(): void {
  }

  onClick($event: HTMLInputElement) {
    this.sendData.emit($event.value);
  }

}
