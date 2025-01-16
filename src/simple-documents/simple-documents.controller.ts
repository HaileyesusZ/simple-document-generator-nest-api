import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  ValidationPipe,
} from '@nestjs/common';
import { CreateSimpleDocumentDto } from './dto/create-simple-document.dto';
import { UpdateSimpleDocumentDto } from './dto/update-simple-document.dto';
import { SimpleDocumentsService } from './simple-documents.service';

@Controller('simple-documents')
export class SimpleDocumentsController {
  constructor(
    private readonly simpleDocumentsService: SimpleDocumentsService,
  ) {}

  @Post()
  async create(
    @Body(new ValidationPipe())
    createSimpleDocumentDto: CreateSimpleDocumentDto,
  ) {
    return await this.simpleDocumentsService.create(createSimpleDocumentDto);
  }

  @Get()
  async findAll() {
    return await this.simpleDocumentsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.simpleDocumentsService.findOne(id);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body(new ValidationPipe())
    updateSimpleDocumentDto: UpdateSimpleDocumentDto,
  ) {
    return await this.simpleDocumentsService.update(
      id,
      updateSimpleDocumentDto,
    );
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.simpleDocumentsService.remove(id);
  }
}
