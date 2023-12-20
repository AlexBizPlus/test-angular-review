import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-baz',
  templateUrl: './baz.component.html',
  styleUrls: ['./baz.component.css'],
})
export class BazComponent implements OnInit {
  // avoid type of "any"
  items: any[];
  message =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit maxime ad accusamus suscipit distinctio molestias repellat ex eius nemo, sint quis ipsa iste omnis quasi voluptatem saepe iusto optio officiis?';

  constructor() {}

  ngOnInit(): void {
    // should use "const" instead of "var"
    var array = [1, 2, 3, 4, 5];
    this.items = array.map((a) => {
      /* missed "return" */ a + 1;
    });
  }
}
