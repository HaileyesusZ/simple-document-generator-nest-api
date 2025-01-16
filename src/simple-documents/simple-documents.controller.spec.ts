import { Test, TestingModule } from '@nestjs/testing';
import { SimpleDocumentsController } from './simple-documents.controller';
import { SimpleDocumentsService } from './simple-documents.service';
import { PrismaService } from '../prisma.service';

describe('SimpleDocumentsController', () => {
  let controller: SimpleDocumentsController;

  const mockPrismaService = {
    $transaction: jest.fn(),
    simpleDocument: {
      create: jest.fn(),
      findMany: jest.fn(),
      findUnique: jest.fn(),
      update: jest.fn(),
      delete: jest.fn(),
    },
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SimpleDocumentsController],
      providers: [
        SimpleDocumentsService,
        { provide: PrismaService, useValue: mockPrismaService },
      ],
    }).compile();

    controller = module.get<SimpleDocumentsController>(
      SimpleDocumentsController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
