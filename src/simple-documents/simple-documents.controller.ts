import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SimpleDocumentsService } from './simple-documents.service';
import { CreateSimpleDocumentDto } from './dto/create-simple-document.dto';
import { UpdateSimpleDocumentDto } from './dto/update-simple-document.dto';

@Controller('simple-documents')
export class SimpleDocumentsController {
  constructor(
    private readonly simpleDocumentsService: SimpleDocumentsService,
  ) {}

  @Post()
  async create(@Body() createSimpleDocumentDto: CreateSimpleDocumentDto) {
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

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateSimpleDocumentDto: UpdateSimpleDocumentDto,
  ) {
    return this.simpleDocumentsService.update(+id, updateSimpleDocumentDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.simpleDocumentsService.remove(id);
  }
}
