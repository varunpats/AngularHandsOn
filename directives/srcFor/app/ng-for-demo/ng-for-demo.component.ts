import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for-demo',
  templateUrl: './ng-for-demo.component.html'
})
export class NgForDemoComponent implements OnInit {
  public Batches = ["PPA", "LB", "WEB", "PROJECT"];
  ngOnInit() {
  }
}
