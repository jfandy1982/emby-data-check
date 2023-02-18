import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { UserDto } from './user.model';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  usersChanged = new Subject<UserDto>();
  users: UserDto[] = [
    {
      userId: 'U-1',
      serverId: 'S-1',
      embyUserId: '1234567890',
      embyUserName: 'willi',
      embyServerId: 'abc123',
    },
    {
      userId: 'U-2',
      serverId: 'S-1',
      embyUserId: '2234567890',
      embyUserName: 'embysvr',
      embyServerId: 'abc123',
    },
    {
      userId: 'U-3',
      serverId: 'S-2',
      embyUserId: '1234567899',
      embyUserName: 'willi',
      embyServerId: 'abc124',
    },
    {
      userId: 'U-4',
      serverId: 'S-2',
      embyUserId: '2234567899',
      embyUserName: 'embysvr',
      embyServerId: 'abc124',
    },
    {
      userId: 'U-5',
      serverId: 'S-2',
      embyUserId: '2234567844',
      embyUserName: 'hugo',
      embyServerId: 'abc124',
    },
  ];

  getUsers(serverid: string): UserDto[] {
    return this.users.filter((filterUser: UserDto) => {
      return filterUser.serverId === serverid;
    });
  }

  getUser(userId: string): UserDto {
    const foundUser = this.users.find((user) => {
      return user.userId === userId;
    });
    if (foundUser) {
      return foundUser;
    } else {
      throw Error('User with ID [' + userId + '] not found in Array of UsersService');
    }
  }
}
