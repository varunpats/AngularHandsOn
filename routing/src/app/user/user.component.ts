import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
// import { relative } from 'path';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user: any[] | undefined;

  constructor(private users: UsersService, private route: Router, private activated: ActivatedRoute) { }

  ngOnInit(): void {
    this.user = this.users.user;
  }

  onClick(index: number) {
    this.route.navigate([index], { relativeTo: this.activated })
  }

}
