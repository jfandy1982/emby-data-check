import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Query } from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiResponse, ApiParam, ApiBody } from '@nestjs/swagger';
import { Pagination } from 'nestjs-typeorm-paginate';
import { DeleteResult } from 'typeorm';
import { UserCreateDto, UserDto } from '../models/user.interface';
import { UserDbService } from '../service/user-db.service';
import { UserHttpService } from '../service/user-http.service';

@ApiTags('users')
@Controller('users')
export class UserController {
  constructor(private userDbService: UserDbService, private userHttpService: UserHttpService) {}

  @ApiBearerAuth()
  @ApiResponse({ isArray: true, status: HttpStatus.OK, description: 'List of Users' })
  @Get()
  async findAllUsers(@Query('page') page = 1, @Query('limit') limit = 10): Promise<Pagination<UserDto>> {
    limit = limit > 100 ? 100 : limit;
    return this.userDbService.findAllUsers({ page, limit, route: 'http://localhost:3000/api/users' });
  }

  @ApiBearerAuth()
  @ApiResponse({ status: HttpStatus.OK, description: 'A single User' })
  @ApiParam({ name: 'id', description: 'ID of User in Backup DB', required: true, example: '11bf5b37-e0b8-42e0-8dcf-dc8c4aefc000' })
  @Get(':id')
  findOneUserById(@Param('id') id: string): Promise<UserDto> {
    return this.userDbService.findOneUserById(id);
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
    return this.userDbService.createNewUser(newUser);
  }

  @ApiBearerAuth()
  @ApiResponse({ status: HttpStatus.OK, description: 'A User deleted from Backup DB' })
  @ApiParam({ name: 'id', description: 'ID of User in Backup DB', required: true, example: '11bf5b37-e0b8-42e0-8dcf-dc8c4aefc000' })
  @Delete(':id')
  async deleteUser(@Param('id') id: string): Promise<DeleteResult> {
    return this.userDbService.deleteUser(id);
  }

  private createDtoToEntity(createDto: UserCreateDto): UserDto {
    return {
      name: createDto.name,
      password: createDto.password,
      username: createDto.username,
      role: createDto.role,
    };
  }
}
