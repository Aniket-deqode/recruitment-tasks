import { Injectable, forwardRef, Inject } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './schema/user.model';
import { v4 as uuidv4 } from 'uuid';
@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async findOne(query: any): Promise<any> {
    return await this.userModel.findOne(query).select('+password');
  }

  async find(query: any): Promise<User[]> {
    return this.userModel.find(query);
  }

  async create(user: any): Promise<User> {
    return this.userModel.create({
      id: uuidv4(),
      created: new Date(),
      ...user,
    });
  }

  async findOneAndUpdate(query: any, payload: any): Promise<User> {
    return this.userModel.findOneAndUpdate(query, payload, {
      new: true,
    });
  }
}
