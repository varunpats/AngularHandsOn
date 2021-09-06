import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { UsersService } from 'src/app/users.service';

@Component({
  selector: 'app-user-child',
  templateUrl: './user-child.component.html',
  styleUrls: ['./user-child.component.css']
})
export class UserChildComponent implements OnInit {

  id: any;
  player: any;

  constructor(private route: ActivatedRoute, private user: UsersService) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = params['id'];
        // console.log(this.id);
        this.player = this.user.user[this.id - 1]
      }
    )
    // console.log(this.id);
  }

}
