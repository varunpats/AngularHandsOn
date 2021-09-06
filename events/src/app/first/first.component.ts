import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styles: [`
  h3 {
    color: red;
}`]
})
export class FirstComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
