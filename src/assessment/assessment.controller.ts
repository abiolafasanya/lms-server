import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AssessmentService } from './assessment.service';
import { Prisma } from '@prisma/client';

@Controller('assessment')
export class AssessmentController {
  constructor(private readonly assessmentService: AssessmentService) {}

  @Post()
  create(@Body() createAssessmentDto: Prisma.AssessmentCreateInput) {
    return this.assessmentService.create(createAssessmentDto);
  }

  @Get()
  findAll() {
    return this.assessmentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.assessmentService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateAssessmentDto: Prisma.AssessmentUpdateInput,
  ) {
    return this.assessmentService.update(id, updateAssessmentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.assessmentService.remove(id);
  }
}
