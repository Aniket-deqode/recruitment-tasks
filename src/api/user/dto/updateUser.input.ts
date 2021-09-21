import { IsOptional, IsEmail, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateUserDTO {
  @ApiProperty({ required: false, example: 'Aniket@deqode.com' })
  @IsOptional()
  @IsString()
  @IsEmail()
  email: string;

  @ApiProperty({ required: true, example: 'Aniket' })
  @IsOptional()
  @IsString()
  givenName: string;

  @ApiProperty({ required: true, example: 'Tikone' })
  @IsOptional()
  @IsString()
  familyName: string;
}
