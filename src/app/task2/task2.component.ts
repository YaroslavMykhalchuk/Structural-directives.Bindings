import { Component } from '@angular/core';

@Component({
  selector: 'app-task2',
  templateUrl: './task2.component.html',
  styleUrls: ['./task2.component.css']
})
export class Task2Component {
  number1: number = 0;
  number2: number = 0;
  operator: string = 'plus'; // дефолтне значення, так як в списку операторів + в нас стоїть першим
  result: number = 0;

  calculate() {
    switch (this.operator) {
      case 'plus':
        this.result = this.number1 + this.number2;
        break;
      case 'minus':
        this.result = this.number1 - this.number2;
        break;
      case 'multiply':
        this.result = this.number1 * this.number2;
        break;
      case 'divide':
        this.result = this.number1 / this.number2;
        break;
      default:
        this.result = 0;
        break;
    }
  }
}
