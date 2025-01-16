import { IsNotEmpty, IsString, MaxLength, Validate } from 'class-validator';
import { IsObjectIdValidator } from '../../utils/validators/IsObjectIdValidator';

export class CreateSimpleDocumentDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(255)
  title: string;

  @IsString()
  @IsNotEmpty()
  content: string;

  @IsString()
  @IsNotEmpty()
  @Validate(IsObjectIdValidator)
  owner_id: string;
}
