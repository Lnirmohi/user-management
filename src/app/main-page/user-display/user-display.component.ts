import { Component, Input, OnInit, Output } from '@angular/core';
import User from 'src/shared/user';

@Component({
  selector: 'app-user-display',
  templateUrl: './user-display.component.html',
  styleUrls: ['./user-display.component.scss']
})
export class UserDisplayComponent implements OnInit {

  @Input() users: User[];

  constructor() {
  }

  ngOnInit(): void {
  }

}
