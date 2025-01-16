import { Test, TestingModule } from '@nestjs/testing';
import { SimpleDocumentsService } from './simple-documents.service';

describe('SimpleDocumentsService', () => {
  let service: SimpleDocumentsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SimpleDocumentsService],
    }).compile();

    service = module.get<SimpleDocumentsService>(SimpleDocumentsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
