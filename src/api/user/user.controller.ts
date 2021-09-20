import {
  Controller,
  Post,
  Body,
  Put,
  Param,
  Get,
  Delete,
} from '@nestjs/common';
import { BadRequestException } from '@nestjs/common';
import { User } from 'src/api/user/schema/user.model';
import { UserService } from './user.service';
import { CreateUserDTO } from './dto/createUser.input';
import { UserIDDTO } from './dto/userId.input';
import { UpdateUserDTO } from './dto/updateUser.input';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('create')
  async create(@Body() Body: CreateUserDTO): Promise<User> {
    const newUser = Body;
    try {
      const query = { email: newUser.email };
      const isUser = await this.userService.findOne(query);

      if (isUser) {
        throw new BadRequestException(
          new Error('User Already Exist with same Email'),
        );
      }
      const user = await this.userService.create(newUser);
      return user;
    } catch (error) {
      return error;
    }
  }

  @Put('update/:id')
  async update(
    @Param() { id }: UserIDDTO,
    @Body() Body: UpdateUserDTO,
  ): Promise<User> {
    try {
      const query = { id: id };

      const isUser = await this.userService.findOne(query);
      if (!isUser) {
        throw new BadRequestException(new Error('User Does Not Exist'));
      }
      const updatedUser = await this.userService.findOneAndUpdate(query, Body);
      return updatedUser;
    } catch (error) {
      return error;
    }
  }

  @Get(':id')
  async getUser(@Param() { id }: UserIDDTO): Promise<User> {
    try {
      const isUser = await this.userService.findOne({ id });
      if (!isUser) {
        throw new BadRequestException(new Error('User Does Not Exist'));
      }
      return isUser;
    } catch (error) {
      return error;
    }
  }

  @Delete(':id')
  async delete(@Param() { id }): Promise<User> {
    try {
      const isUser = await this.userService.findOne({ id });
      if (!isUser) {
        throw new BadRequestException(new Error('User Does Not Exist'));
      }
      const deleteUser = await this.userService.findOneAndDelete({ id });
      return isUser;
    } catch (error) {
      return error;
    }
  }
}
