import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;
import validator from 'validator';

@Schema()
export class User {
  @Prop()
  id: string;

  @Prop({
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, 'Please enter a valid email-id'],
  })
  email: string;

  @Prop()
  givenName: string;

  @Prop()
  familyName: string;

  @Prop()
  created: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);
