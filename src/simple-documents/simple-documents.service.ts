import { Injectable } from '@nestjs/common';
import { CreateSimpleDocumentDto } from './dto/create-simple-document.dto';
import { UpdateSimpleDocumentDto } from './dto/update-simple-document.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class SimpleDocumentsService {
  constructor(private prisma: PrismaService) {}
  async create(createSimpleDocumentDto: CreateSimpleDocumentDto) {
    return await this.prisma.$transaction(async (prisma) => {
      return await prisma.simpleDocument.create({
        data: createSimpleDocumentDto,
      });
    });
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
