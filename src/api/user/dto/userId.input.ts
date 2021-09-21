import { IsUUID } from 'class-validator';

export class UserIDDTO {
  @IsUUID()
  id: string;
}
