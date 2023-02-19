import { Body, Controller, Get, HttpStatus, Param, Post, Query } from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiResponse, ApiParam, ApiBody } from '@nestjs/swagger';
import { Pagination } from 'nestjs-typeorm-paginate';
import { UserCreateDto, UserDto } from '../models/user.interface';
import { UserService } from '../service/user.service';

@ApiTags('users')
@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @ApiBearerAuth()
  @ApiResponse({ isArray: true, status: HttpStatus.OK, description: 'List of Users' })
  @Get()
  async findAllUsers(@Query('page') page = 1, @Query('limit') limit = 10): Promise<Pagination<UserDto>> {
    limit = limit > 100 ? 100 : limit;
    return this.userService.findAllUsers({ page, limit, route: 'http://localhost:3000/api/users' });
  }

  @ApiBearerAuth()
  @ApiResponse({ status: HttpStatus.OK, description: 'A single User' })
  @ApiParam({ name: 'id', description: 'ID of User in Backup DB', required: true, example: '11bf5b37-e0b8-42e0-8dcf-dc8c4aefc000' })
  @Get(':id')
  findOneUserById(@Param('id') id: string): Promise<UserDto> {
    return this.userService.findOneUserById(id);
  }

  @ApiBearerAuth()
  @ApiBody({ type: [UserCreateDto] })
  @ApiResponse({ status: HttpStatus.OK, description: 'A User saved in Backup DB' })
  @Post()
  async createNewUser(@Body() createUser: UserCreateDto): Promise<UserDto> {
    // TODO:
    //  Password still saved in plain text in the database.
    //    It will be hashed when I add an AuthModule later!!
    const newUser = this.createDtoToEntity(createUser);
    return this.userService.createNewUser(newUser);
  }

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

  private createDtoToEntity(createDto: UserCreateDto): UserDto {
    return {
      name: createDto.name,
      password: createDto.password,
      username: createDto.username,
      role: createDto.role,
    };
  }
}
