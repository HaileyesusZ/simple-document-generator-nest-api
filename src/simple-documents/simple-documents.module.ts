import { Module } from '@nestjs/common';
import { SimpleDocumentsService } from './simple-documents.service';
import { SimpleDocumentsController } from './simple-documents.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [SimpleDocumentsController],
  providers: [SimpleDocumentsService, PrismaService],
})
export class SimpleDocumentsModule {}
