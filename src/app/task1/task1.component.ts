import { Component } from '@angular/core';

@Component({
  selector: 'app-task1',
  templateUrl: './task1.component.html',
  styleUrls: ['./task1.component.css']
})
export class Task1Component {
  number: string = '';
  digits: string[] = [];

  splitNumber() {
    this.digits = this.number.split('').filter(digit => /\d/.test(digit));
  }
}
