import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  users = {};
  constructor(private user: UserService ) { }

  ngOnInit() {
    this.users = this.user.getData();
  }

}
