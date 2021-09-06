import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styles: [`
  h3 {
    color: blue;
}
button{
    padding: 8px 12px;
    border-radius: 5px;
    background: rgb(60, 135, 233);
    border: none;
    cursor: pointer;
}`]
})
export class SecondComponent implements OnInit {

  text = "Whoever is happy will make others happy too.";
  str = "there is nothing permanent except change.";
  flag = 0;
  btnText = "Load New Text";
  txtFlag = 0;
  case = "Uppercase";

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    if (this.flag == 0) {
      this.text = "You will face many defeats in life, but never let yourself be defeated.";
      this.flag = 1;
      this.btnText = "Load Previous Text";
    } else {
      this.text = "Whoever is happy will make others happy too.";
      this.flag = 0;
      this.btnText = "Load New Text";
    }
  }

  changeText() {
    if (this.txtFlag == 0) {
      this.str = this.str.toUpperCase();
      this.txtFlag = 1;
      this.case = "Lowercase";
    } else {
      this.str = this.str.toLowerCase();
      this.txtFlag = 0;
      this.case = "Uppercase";
    }
    return this.str;
  }

}
