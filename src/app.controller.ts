import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { AppService } from './app.service';
import { User } from './user.entity';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('users')
  createUser(@Body('name') name: string): Promise<User> {
    return this.appService.createUser(name);
  }

  @Get('users')
  getUsers(): Promise<User[]> {
    return this.appService.getAll();
  }

  @Get('users/:id')
  getUserById(@Param('id') id: string): Promise<User> {
    return this.appService.getOneById(Number(id));
  }

  @Patch('users/:id')
  updateUser(
    @Param('id') id: string,
    @Body('name') name: string,
  ): Promise<User> {
    return this.appService.updateUser(Number(id), name);
  }

  @Delete('users/:id')
  deleteUser(@Param('id') id: string): Promise<User> {
    return this.appService.deleteUser(Number(id));
  }
}
