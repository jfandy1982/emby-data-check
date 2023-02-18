import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { UserDto } from '../user.model';
import { UsersService } from '../users.service';

@Component({
  selector: 'emby-data-check-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit, OnDestroy {
  users!: UserDto[];
  private usersChangedSubscription!: Subscription;

  constructor(private usersService: UsersService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.getUsers();
    this.usersChangedSubscription = this.usersService.usersChanged.subscribe(() => {
      this.getUsers();
    });
  }

  ngOnDestroy(): void {
    this.usersChangedSubscription.unsubscribe();
  }

  private getUsers() {
    this.route.queryParams.subscribe((queryParams: Params) => {
      const serverId = queryParams['serverId'];
      this.users = this.usersService.getUsers(serverId);
    });
  }
}
