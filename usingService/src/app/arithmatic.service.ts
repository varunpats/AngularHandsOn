import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArithmaticService {

  constructor() { }

  Add(n1: number, n2: number): number {
    return +n1 + +n2;
  }

  Sub(n1: number, n2: number): number {
    return +n1 - +n2;
  }
}
