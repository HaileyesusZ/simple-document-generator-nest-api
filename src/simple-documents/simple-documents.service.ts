import { Injectable } from '@nestjs/common';
import { CreateSimpleDocumentDto } from './dto/create-simple-document.dto';
import { UpdateSimpleDocumentDto } from './dto/update-simple-document.dto';

@Injectable()
export class SimpleDocumentsService {
  create(createSimpleDocumentDto: CreateSimpleDocumentDto) {
    return 'This action adds a new simpleDocument';
  }

  findAll() {
    return `This action returns all simpleDocuments`;
  }

  findOne(id: number) {
    return `This action returns a #${id} simpleDocument`;
  }

  update(id: number, updateSimpleDocumentDto: UpdateSimpleDocumentDto) {
    return `This action updates a #${id} simpleDocument`;
  }

  remove(id: number) {
    return `This action removes a #${id} simpleDocument`;
  }
}
