import { Test, TestingModule } from '@nestjs/testing';
import { SimpleDocumentsController } from './simple-documents.controller';
import { SimpleDocumentsService } from './simple-documents.service';

describe('SimpleDocumentsController', () => {
  let controller: SimpleDocumentsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SimpleDocumentsController],
      providers: [SimpleDocumentsService],
    }).compile();

    controller = module.get<SimpleDocumentsController>(
      SimpleDocumentsController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
