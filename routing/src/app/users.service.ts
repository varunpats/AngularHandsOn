import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  user = [
    { name: 'Messi', id: 1, age: 20, img: 'https://img.bleacherreport.net/img/images/photos/003/882/208/hi-res-67ba2cd4215bff0d322be08e173488e7_crop_north.jpg?1598817098&w=3072&h=2048' },
    { name: 'Ronaldo', id: 2, age: 24, img: 'https://icdn.juvefc.com/wp-content/uploads/2021/02/Cristiano-Ronaldo-Juventus-2-940x646.jpg' },
    { name: 'Zlatan', id: 3, age: 22, img: 'https://d3nfwcxd527z59.cloudfront.net/content/uploads/2021/08/26103536/Zlatan-Ibrahimovic-AC-Milan-752x428.jpg' }
  ]

  constructor() { }
}
