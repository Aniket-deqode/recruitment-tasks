import { IsEmail, IsString, IsNotEmpty } from 'class-validator';

export class CreateUserDTO {
  @IsEmail()
  @IsString()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  givenName: string;

  @IsString()
  @IsNotEmpty()
  familyName: string;
}
