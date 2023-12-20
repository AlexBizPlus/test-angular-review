import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css'],
})
export class BarComponent implements OnInit {
  // better name "allElements"
  // avoid type "any"
  AllElements: any;
  mess: string;

  constructor() {}

  ngOnInit(): void {
    this.AllElements = { a: 1 };

    // better to use switch statement
    // better to use "===" instead of "=="
    // AllElements is not an array, so this.AllElements[0] will be "undefined"
    if (this.AllElements[0] == 0) {
      this.mess = '0';
    }
    if (this.AllElements[0] == 1) {
      this.mess = '1';
    }
    if (this.AllElements[0] == 2) {
      this.mess = '2';
    }
    this.pow(this.AllElements[0]);
  }

  // возвести в квадрат
  // redundant argument to square number
  // argument type not specified, so this fn will not always return number
  pow(c, count?) {
    return c * c;
  }
}
