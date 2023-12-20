import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css']
})
export class BarComponent implements OnInit {

  AllElements:any;
  mess: string;

  constructor() { }

  ngOnInit(): void {
    this.AllElements={a:1};
    if (this.AllElements[0] == 0)
    {
      this.mess = '0';
    }
    if (this.AllElements[0] == 1)
    {
      this.mess = "1";
    }
    if (this.AllElements[0] == 2)
    {
      this.mess = '2';
    }
    this.pow(this.AllElements[0]);
  }

  // возвести в квадрат
  pow(c, count?) {
    return c *c;
  }
}
