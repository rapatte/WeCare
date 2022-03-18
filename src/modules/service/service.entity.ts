import { Hospital } from 'src/modules/hospital/hospital.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BaseEntity,
  JoinTable,
  ManyToMany,
} from 'typeorm';

@Entity()
export class Service extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  specialisation: string;

  @ManyToMany(() => Hospital)
  @JoinTable()
  hospitals: Hospital[];
}
