import { Component, OnInit } from '@angular/core';
import { ArithmaticService } from '../arithmatic.service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html'
})
export class DemoComponent implements OnInit {

  ans : number;

  constructor(private arith: ArithmaticService) { }

  ngOnInit(): void {
  }

  onAdd(no1,no2) {
    this.ans = this.arith.Add(no1.value, no2.value);
  }

  onSub(no1,no2) {
    this.ans = this.arith.Sub(no1.value, no2.value);
  }
  
}
