import { Controller, Get, HttpStatus, Query } from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiResponse } from '@nestjs/swagger';
import { Pagination } from 'nestjs-typeorm-paginate';
import { UserDto } from '../models/user.interface';
import { UserService } from '../service/user.service';

@ApiTags('users')
@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @ApiBearerAuth()
  @ApiResponse({ isArray: true, status: HttpStatus.OK, description: 'List of Users' })
  @Get()
  async findAll(@Query('page') page = 1, @Query('limit') limit = 10): Promise<Pagination<UserDto>> {
    limit = limit > 100 ? 100 : limit;
    return this.userService.findAll({ page, limit, route: 'http://localhost:3000/api/users' });
  }

  // @Get()
  // findUsers(): Observable<UserDto[]> {
  //   return this.userService.findAll();
  // }

  // @Get(':id')
  // findOneUser(@Param('id') id: string): Observable<UserDto> {
  //   return this.userService.findOne(id);
  // }

  // @ApiBearerAuth()
  // @ApiBody({ type: [UserCreateDto] })
  // @Post()
  // createUser(@Body() newUser: UserCreateDto): Observable<UserDto> {
  //   return this.userService.createUser(newUser).pipe(
  //     map((createdUser) => {
  //       return createdUser;
  //     })
  //   );
  // }

  // @ApiBearerAuth()
  // @ApiBody({ type: [UserUpdateDto] })
  // @Put(':id')
  // updateUser(@Param('id') id: string, @Body() updatedUser: UserUpdateDto): Observable<UserDto> {
  //   return this.userService.updateUser(id, updatedUser);
  // }

  // // TODO:
  // // This endpoint will be protected by AuthGuard 'IS_ADMIN' or similar
  // @ApiBearerAuth()
  // @ApiBody({ type: [UserUpdateDto] })
  // @Put(':id/role')
  // updateRoleOfUser(@Param('id') id: string, @Body() updatedUser: UserUpdateDto): Observable<UserDto> {
  //   return this.userService.updateRoleOfUser(id, updatedUser);
  // }

  // @ApiBearerAuth()
  // @Delete(':id')
  // deleteUser(@Param('id') id: string): Observable<UserDto> {
  //   return this.userService.deleteUser(id);
  // }
}
