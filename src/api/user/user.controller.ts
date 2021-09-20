import { Controller, Post, Body } from '@nestjs/common';
import { BadRequestException } from '@nestjs/common';
import { User } from 'src/api/user/schema/user.model';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('create')
  async create(@Body() Body): Promise<User> {
    const newUser = Body;
    try {
      const query = { email: newUser.email };
      const isUser = await this.userService.findOne(query);

      if (isUser) {
        throw new BadRequestException(
          new Error('User Already Exist with same mail'),
        );
      }

      const user = await this.userService.create(newUser);
      return user;
    } catch (err) {
      console.log('Something went wrong in signup:', err);
      return err;
    }
  }
}
