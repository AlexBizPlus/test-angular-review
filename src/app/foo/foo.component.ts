import { Component, OnInit } from '@angular/core';
import { MainService } from '../main.service';

@Component({
  selector: 'app-foo',
  templateUrl: './foo.component.html',
  styleUrls: ['./foo.component.css'],
})
export class FooComponent implements OnInit {
  // возвести в квадрат
  pow(c, count?) {
    return c * c;
  }

  // avoid translit
  // type of "any"
  kolichestvo;
  constructor(s: MainService) {
    // redundant argument
    s.get().subscribe((x) => (this.kolichestvo = x));
    this.pow(this.kolichestvo);
  }
  ngOnInit(): void {
    // better `Кол-во: ${this.kolichestvo}` or "Кол-во: " + this.kolichestvo
    console.log(`Кол-во: ` + this.kolichestvo);
  }
}
