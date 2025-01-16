import { IsNotEmpty, IsString, MaxLength, Validate } from 'class-validator';
import { IsObjectIdValidator } from 'src/utils/validators/IsObjectIdValidator';

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
