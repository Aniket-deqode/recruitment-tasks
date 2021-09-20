import { IsOptional, IsEmail, IsString } from 'class-validator';

export class UpdateUserDTO {
  @IsOptional()
  @IsString()
  @IsEmail()
  email: string;

  @IsOptional()
  @IsString()
  givenName: string;

  @IsOptional()
  @IsString()
  familyName: string;
}
