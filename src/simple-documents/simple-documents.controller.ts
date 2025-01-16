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
  create(@Body() createSimpleDocumentDto: CreateSimpleDocumentDto) {
    return this.simpleDocumentsService.create(createSimpleDocumentDto);
  }

  @Get()
  findAll() {
    return this.simpleDocumentsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.simpleDocumentsService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateSimpleDocumentDto: UpdateSimpleDocumentDto,
  ) {
    return this.simpleDocumentsService.update(+id, updateSimpleDocumentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.simpleDocumentsService.remove(+id);
  }
}
