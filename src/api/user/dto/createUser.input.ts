import { IsEmail, IsString, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDTO {
  @ApiProperty({ required: false, example: 'Aniket@deqode.com' })
  @IsEmail()
  @IsString()
  @IsNotEmpty()
  email: string;

  @ApiProperty({ required: true, example: 'Aniket' })
  @IsString()
  @IsNotEmpty()
  givenName: string;

  @ApiProperty({ required: true, example: 'Tikone' })
  @IsString()
  @IsNotEmpty()
  familyName: string;
}
