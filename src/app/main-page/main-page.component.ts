import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  rows: object[] = [];

  columns = [{prop: 'id'}, {name: 'first_name'}, {name: 'last_name'}, {name: 'email'}, {name: 'gender'}];

  constructor(private userService: UserService) {
    this.getUserList();
  }

  ngOnInit(): void {
    console.log(this.rows);
    this.userService.addUser({});
  }

  getUserList() {

    this.userService.getUsers()
      .subscribe((data: []) => {

        data.forEach((user: any) => {

          const {id, first_name, last_name, email, gender} = user;

          this.rows.push({
            id,
            first_name,
            last_name,
            email,
            gender
          });
        });
      });

  }

}
