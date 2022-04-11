import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BaseEntity,
  ManyToOne,
} from 'typeorm';
import { Hospital } from '../hospital/hospital.entity';
@Entity()
export class Practitioner extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstname: string;

  @Column()
  lastname: string;

  @Column()
  mail: string;

  @Column()
  city: string;

  @Column()
  specialization: string;

  @ManyToOne(() => Hospital, (hospital) => hospital.practitionners)
  hospital: Hospital;
}
