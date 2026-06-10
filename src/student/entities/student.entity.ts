import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity({ name: 'students' })
export class Student {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  nombre: string;

  @Column({ type: 'varchar', length: 100, unique: true })
  cedula: string;

  @Column({ type: 'int' })
  edad: number;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;
}
