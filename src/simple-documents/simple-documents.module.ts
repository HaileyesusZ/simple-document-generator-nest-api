import { MiddlewareConsumer, Module } from '@nestjs/common';
import { SimpleDocumentsService } from './simple-documents.service';
import { SimpleDocumentsController } from './simple-documents.controller';
import { PrismaService } from 'src/prisma.service';
import { AuthMiddleware } from 'src/auth/authMiddleware';

@Module({
  controllers: [SimpleDocumentsController],
  providers: [SimpleDocumentsService, PrismaService],
})
export class SimpleDocumentsModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes(SimpleDocumentsController);
  }
}
