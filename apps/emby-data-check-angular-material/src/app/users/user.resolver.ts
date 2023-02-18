import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { UserDto } from './user.model';
import { UsersService } from './users.service';

@Injectable({
  providedIn: 'root',
})
export class UserResolver implements Resolve<UserDto> {
  constructor(private usersService: UsersService) {}

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): UserDto | Observable<UserDto> | Promise<UserDto> {
    return this.usersService.getUser(route.params['userid']);
  }
}
