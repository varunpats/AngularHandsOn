import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '';
  sendTxt = '';

  toChild(inputData) {
    this.sendTxt = inputData.value;
    console.log(this.sendTxt);
  }

  getData($event) {
    this.title = $event;
  }
}
