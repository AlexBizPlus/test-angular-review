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
    //redundant argument
    s.get(/* 10 */).subscribe((x) => (this.kolichestvo = x));
    this.pow(this.kolichestvo);
  }

  ngOnInit(): void {
    // better `Кол-во: ${this.kolichestvo}` or "Кол-во: " + this.kolichestvo
    console.log(`Кол-во: ` + this.kolichestvo);
  }
}

// 1. better to move subscriptions into ngOnInit
// https://stackoverflow.com/questions/64297512/where-to-subscribe-to-an-observable-constructor-or-ngoninit-in-angular

// 2. missed unsubscribe

/* import { Component, OnDestroy, OnInit } from '@angular/core';
 * import { Subscription } from 'rxjs';
 *
 * @Component({
 *   selector: 'app-foo',
 *   templateUrl: './foo.component.html',
 *   styleUrls: ['./foo.component.css'],
 * })
 * export class FooComponent implements OnInit, OnDestroy {
 *
 * sub: Subscription;
 *
 * ngOnInit(): void {
 *   this.sub = s.get().subscribe((x) => (this.kolichestvo = x));
 * }
 *
 * ngOnDestroy() {
 *  this.sub.unsubscribe()
 * }
 */
