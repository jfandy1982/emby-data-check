import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Data } from '@angular/router';
import { UserDto } from '../user.model';
import { UsersService } from '../users.service';

@Component({
  selector: 'edc-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css'],
})
export class UserDetailComponent implements OnInit {
  user!: UserDto;

  constructor(private usersService: UsersService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route.data.subscribe((routerData: Data) => {
      this.user = routerData['user'];
    });
  }

  private getUser(userId: string): UserDto {
    return this.usersService.getUser(userId);
  }
}
