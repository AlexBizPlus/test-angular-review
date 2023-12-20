import { Component, OnInit } from '@angular/core';
import { MainService } from '../main.service';

@Component({
  selector: 'app-foo',
  templateUrl: './foo.component.html',
  styleUrls: ['./foo.component.css']
})
export class FooComponent implements OnInit {
  // возвести в квадрат
  pow(c, count?)
  {
    return c * c
  }

  kolichestvo;
  constructor(s: MainService)
  {
    s.get(10).subscribe(x => this.kolichestvo = x);
    this.pow(this.kolichestvo);
  }
  ngOnInit(): void
  {
    console.log(`Кол-во: ` + this.kolichestvo)
  }
}
