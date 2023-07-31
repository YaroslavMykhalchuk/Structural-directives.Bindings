import { Component } from '@angular/core';

@Component({
  selector: 'app-task3',
  templateUrl: './task3.component.html',
  styleUrls: ['./task3.component.css']
})
export class Task3Component {
  firstImage: string = '../../assets/pepe1.png';
  secondImage: string = '../../assets/pepe3.png';
  currentImage: string = this.firstImage;
  buttonText: string = 'Показати друге зображення';
  isFirstImage: boolean = true;

  changeImage() {
    if (this.isFirstImage) {
      this.currentImage = this.secondImage;
      this.buttonText = 'Показати перше зображення';
    }
    else {
      this.currentImage = this.firstImage;
      this.buttonText = 'Показати друге зображення';
    }
    this.isFirstImage = !this.isFirstImage;
  }
}
