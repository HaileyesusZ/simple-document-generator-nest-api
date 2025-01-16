import { IsNotEmpty, IsString, MaxLength, Validate } from 'class-validator';
import { ObjectId } from 'mongodb';

export class CreateSimpleDocumentDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(255)
  title: string;

  @IsString()
  @IsNotEmpty()
  content: string;

  @IsString()
  @Validate((value) => ObjectId.isValid(value), {
    message: 'Owner Id must be a valid Id',
  })
  owner_id: string;
}
