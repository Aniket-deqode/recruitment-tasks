import { Injectable, forwardRef, Inject } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';
import { User, UserDocument } from './schema/user.model';
import { CreateUserDTO } from './dto/createUser.input';
import { UpdateUserDTO } from './dto/updateUser.input';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async findOne(query: any): Promise<any> {
    return await this.userModel.findOne(query);
  }

  async find(query: any): Promise<User[]> {
    return this.userModel.find(query);
  }

  async create(user: CreateUserDTO): Promise<User> {
    return this.userModel.create({
      id: uuidv4(),
      created: new Date(),
      ...user,
    });
  }

  async findOneAndUpdate(query: any, payload: UpdateUserDTO): Promise<User> {
    return this.userModel.findOneAndUpdate(query, payload, {
      new: true,
    });
  }

  async findOneAndDelete(query: any) {
    return this.userModel.deleteOne(query);
  }
}
