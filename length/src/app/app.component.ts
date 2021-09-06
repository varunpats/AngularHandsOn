import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  str: string = '';
  len: number = 0;
  inputTxt: string;
  lengthStr: number = 0;

  length() {
    this.len = this.str.length;
    return this.len;
  }

  onKey(text) {
    this.lengthStr = (text.target.value).length;
  }
}
