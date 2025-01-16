import { PartialType } from '@nestjs/mapped-types';
import { CreateSimpleDocumentDto } from './create-simple-document.dto';

export class UpdateSimpleDocumentDto extends PartialType(
  CreateSimpleDocumentDto,
) {}
