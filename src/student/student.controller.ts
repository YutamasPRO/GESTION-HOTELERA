import { Controller, Get, Post, Body } from '@nestjs/common';
import { StudentService } from './student.service';
import { Student } from './entities/student.entity';

@Controller('students')
export class StudentController {
  constructor(private readonly service: StudentService) {}

  @Get()
  findAll(): Promise<Student[]> {
    return this.service.findAll();
  }

  @Post()
  create(@Body() body: Partial<Student>): Promise<Student> {
    return this.service.create(body);
  }
}
