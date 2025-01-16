import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateSimpleDocumentDto } from './dto/create-simple-document.dto';
import { UpdateSimpleDocumentDto } from './dto/update-simple-document.dto';

@Injectable()
export class SimpleDocumentsService {
  constructor(private prisma: PrismaService) {}
  async create(createSimpleDocumentDto: CreateSimpleDocumentDto) {
    try {
      const result = await this.prisma.$transaction(async (prisma) => {
        return await prisma.simpleDocument.create({
          data: createSimpleDocumentDto,
        });
      });
      return result;
    } catch (error) {
      // replace with a proper logging service in production
      console.error('Unable to create a simple document', error);
      return new InternalServerErrorException({
        message: 'Unable to create a simple document',
      });
    }
  }

  async findAll() {
    try {
      return await this.prisma.simpleDocument.findMany();
    } catch (error) {
      console.error('Unable to find all simple documents', error);
      return new InternalServerErrorException({
        message: 'Unable to find all simple documents',
      });
    }
  }

  async findOne(id: string) {
    try {
      const result = await this.prisma.simpleDocument.findUnique({
        where: {
          id,
        },
      });
      if (result === null) {
        throw new NotFoundException({
          message: 'Simple document not found',
        });
      }
      return result;
    } catch (error) {
      console.error('Unable to find all simple documents', error);
      return new InternalServerErrorException({
        message: 'Unable to find all simple documents',
      });
    }
  }

  async update(id: string, updateSimpleDocumentDto: UpdateSimpleDocumentDto) {
    try {
      const result = await this.prisma.$transaction(async (prisma) => {
        return await prisma.simpleDocument.update({
          where: {
            id,
          },
          data: updateSimpleDocumentDto,
        });
      });
      return result;
    } catch (error) {
      console.error('Unable to update simple document', error);
      return new InternalServerErrorException({
        message: 'Unable to update simple document',
      });
    }
  }

  async remove(id: string) {
    try {
      const result = await this.prisma.simpleDocument.delete({
        where: {
          id,
        },
      });
      return result;
    } catch (error) {
      console.error('Unable to delete simple document', error);
      return new InternalServerErrorException({
        message: 'Unable to delete simple document',
      });
    }
  }
}
