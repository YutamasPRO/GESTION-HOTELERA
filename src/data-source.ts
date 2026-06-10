import { DataSource } from 'typeorm';
import { Guest } from './guest/entities/guest.entity';
import { Estadia } from './estadia/entities/estadia.entity';
import { Consumo } from './consumo/entities/consumo.entity';
import { Habitacion } from './habitacion/entities/habitacion.entity';
import { RoomType } from './room-type/entities/room-type.entity';
import { Student } from './student/entities/student.entity';

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: process.env.DB_HOST ?? '127.0.0.1',
  port: Number(process.env.DB_PORT) || 3306,
  username: process.env.DB_USER ?? 'root',
  password: process.env.DB_PASS ?? '',
  database: process.env.DB_NAME ?? 'hotel',
  entities: [Guest, Estadia, Consumo, Habitacion, RoomType, Student],
  migrations: ['dist/migrations/*.js'],
  synchronize: true,
  migrationsRun: process.env.NODE_ENV === 'production',
  ssl: process.env.DB_SSL === 'true' ? { rejectUnauthorized: false } : false,
  logging: process.env.NODE_ENV !== 'production',
});
