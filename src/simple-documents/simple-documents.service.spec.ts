import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from '../prisma.service';
import { SimpleDocumentsService } from './simple-documents.service';

describe('SimpleDocumentsService', () => {
  let service: SimpleDocumentsService;
  let prisma: PrismaService;

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
      providers: [
        SimpleDocumentsService,
        { provide: PrismaService, useValue: mockPrismaService },
      ],
    }).compile();

    service = module.get<SimpleDocumentsService>(SimpleDocumentsService);
    prisma = module.get<PrismaService>(PrismaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create', () => {
    it('should create a simple document', async () => {
      const createSimpleDocumentDto = {
        title: 'Test',
        content: 'Test Content',
        owner_id: '67896b0a80ec91cb96aa5781',
      };
      const result = { id: '1', ...createSimpleDocumentDto };

      mockPrismaService.$transaction.mockImplementation(async (callback) => {
        return callback(prisma);
      });
      mockPrismaService.simpleDocument.create.mockResolvedValue(result);

      expect(await service.create(createSimpleDocumentDto)).toEqual(result);
      expect(mockPrismaService.simpleDocument.create).toHaveBeenCalledWith({
        data: createSimpleDocumentDto,
      });
    });
  });

  describe('findAll', () => {
    it('should return all simple documents', async () => {
      const documents = [
        { id: '1', title: 'Doc 1', content: 'Content 1' },
        { id: '2', title: 'Doc 2', content: 'Content 2' },
      ];

      mockPrismaService.simpleDocument.findMany.mockResolvedValue(documents);

      expect(await service.findAll()).toEqual(documents);
      expect(mockPrismaService.simpleDocument.findMany).toHaveBeenCalled();
    });
  });

  describe('findOne', () => {
    it('should return a single simple document', async () => {
      const document = { id: '1', title: 'Doc 1', content: 'Content 1' };

      mockPrismaService.simpleDocument.findUnique.mockResolvedValue(document);

      expect(await service.findOne('1')).toEqual(document);
      expect(mockPrismaService.simpleDocument.findUnique).toHaveBeenCalledWith({
        where: { id: '1' },
      });
    });
  });

  describe('update', () => {
    it('should update a simple document', async () => {
      const updateSimpleDocumentDto = {
        title: 'Updated Title',
        content: 'Updated Content',
        owner_id: '67896b0a80ec91cb96aa5782',
      };
      const result = { id: '1', ...updateSimpleDocumentDto };

      mockPrismaService.$transaction.mockImplementation(async (callback) => {
        return callback(prisma);
      });
      mockPrismaService.simpleDocument.update.mockResolvedValue(result);

      expect(await service.update('1', updateSimpleDocumentDto)).toEqual(
        result,
      );
      expect(mockPrismaService.simpleDocument.update).toHaveBeenCalledWith({
        where: { id: '1' },
        data: updateSimpleDocumentDto,
      });
    });
  });

  describe('remove', () => {
    it('should delete a simple document', async () => {
      const document = { id: '1', title: 'Doc 1', content: 'Content 1' };

      mockPrismaService.simpleDocument.delete.mockResolvedValue(document);

      expect(await service.remove('1')).toEqual(document);
      expect(mockPrismaService.simpleDocument.delete).toHaveBeenCalledWith({
        where: { id: '1' },
      });
    });
  });
});
