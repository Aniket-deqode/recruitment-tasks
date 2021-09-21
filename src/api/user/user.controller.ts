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
import {
  ApiBadRequestResponse,
  ApiOperation,
  ApiResponse,
  ApiOkResponse,
  ApiTags,
  ApiCreatedResponse,
  ApiParam,
} from '@nestjs/swagger';
import { User } from 'src/api/user/schema/user.model';
import { UserService } from './user.service';
import { CreateUserDTO } from './dto/createUser.input';
import { UserIDDTO } from './dto/userId.input';
import { UpdateUserDTO } from './dto/updateUser.input';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ApiTags('User')
  @ApiOperation({ summary: 'Create User' })
  @ApiCreatedResponse({ type: CreateUserDTO, description: 'User Created' })
  @ApiBadRequestResponse({
    description: 'User Already Exist with same Email',
  })
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

  @ApiTags('User')
  @ApiOperation({ summary: 'Update User' })
  @ApiOkResponse({ type: CreateUserDTO, description: 'Update User Info' })
  @ApiBadRequestResponse({
    description: 'User Does Not Exist',
  })
  @ApiParam({
    name: 'id',
    required: true,
    description: 'User Id',
    schema: { oneOf: [{ type: 'string' }, { type: 'integer' }] },
  })
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

  @ApiTags('User')
  @ApiOperation({ summary: 'Get User Info' })
  @ApiResponse({ type: CreateUserDTO, description: 'User Information' })
  @ApiBadRequestResponse({
    description: 'User Does Not Exist',
  })
  @ApiParam({
    name: 'id',
    required: true,
    description: 'User Id',
    schema: { oneOf: [{ type: 'string' }, { type: 'integer' }] },
  })
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

  @ApiTags('User')
  @ApiOperation({ summary: 'Get User Info' })
  @ApiCreatedResponse({ type: CreateUserDTO, description: 'User Deleted' })
  @ApiBadRequestResponse({
    description: 'User Does Not Exist',
  })
  @ApiParam({
    name: 'id',
    required: true,
    description: 'User Id',
    schema: { oneOf: [{ type: 'string' }, { type: 'integer' }] },
  })
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
