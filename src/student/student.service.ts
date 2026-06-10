import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Student } from './entities/student.entity';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student)
    private readonly repo: Repository<Student>,
  ) {}

  findAll(): Promise<Student[]> {
    return this.repo.find();
  }

  create(student: Partial<Student>): Promise<Student> {
    const ent = this.repo.create(student as any);
    return this.repo.save(ent);
  }
}
