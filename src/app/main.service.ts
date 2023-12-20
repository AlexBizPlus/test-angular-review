import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor() { }

  get() {
    return of(1);
  }
}
