import { Controller, Post, Body, Put, Param } from '@nestjs/common';
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
    } catch (err) {
      return err;
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
      console.log('is user', isUser);
      if (!isUser) {
        throw new BadRequestException(new Error('User Does Not Exist'));
      }
      const updatedUser = await this.userService.findOneAndUpdate(query, Body);
      return updatedUser;
    } catch (err) {
      return err;
    }
  }
}
