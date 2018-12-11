import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
  providers: [UserService]
})

export class NavigationComponent implements OnInit {
  users = { };
  constructor(private user: UserService) { }

  ngOnInit() {
    this.users = this.user.getData();
  }

}
