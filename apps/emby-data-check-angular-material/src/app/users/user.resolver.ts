import { Injectable } from '@angular/core';
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { UserDto } from './user.model';
import { UsersService } from './users.service';

@Injectable({
  providedIn: 'root',
})
export class UserResolver implements Resolve<UserDto> {
  constructor(private usersService: UsersService) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): UserDto | Observable<UserDto> | Promise<UserDto> {
    return this.usersService.getUser(route.params['userid']);
  }
}
