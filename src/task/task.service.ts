import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class TasksService {
  constructor(private readonly databaseService: DatabaseService) {}

  async create(createTaskDto: Prisma.TaskCreateInput) {
    return await this.databaseService.task.create({ data: createTaskDto });
  }

  async findAll() {
    return await this.databaseService.task.findMany({});
  }

  async findOne(id: string) {
    return await this.databaseService.task.findUnique({ where: { id } });
  }

  async update(id: string, updateTaskDto: Prisma.TaskUpdateInput) {
    return await this.databaseService.task.update({
      where: { id },
      data: updateTaskDto,
    });
  }

  async remove(id: string) {
    return await this.databaseService.task.delete({ where: { id } });
  }
}
