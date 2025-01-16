import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SimpleDocumentsModule } from './simple-documents/simple-documents.module';

@Module({
  imports: [SimpleDocumentsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
