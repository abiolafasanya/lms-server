import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class AssessmentService {
  constructor(private readonly databaseService: DatabaseService) {}

  async create(createAssessmentDto: Prisma.AssessmentCreateInput) {
    return await this.databaseService.assessment.create({
      data: createAssessmentDto,
    });
  }

  async findAll() {
    return await this.databaseService.assessment.findMany({});
  }

  async findOne(id: string) {
    return await this.databaseService.assessment.findUnique({
      where: { id },
      include: {
        questions: true,
      },
    });
  }

  async update(id: string, updateAssessmentDto: Prisma.AssessmentUpdateInput) {
    return await this.databaseService.assessment.update({
      where: { id },
      data: updateAssessmentDto,
    });
  }

  async remove(id: string) {
    return await this.databaseService.assessment.delete({ where: { id } });
  }
}
