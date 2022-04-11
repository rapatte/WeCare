import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BaseEntity,
  OneToMany,
} from 'typeorm';
import { Practitioner } from '../practitioner/practitioner.entity';

@Entity()
export class Hospital extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  address: string;

  @Column()
  telephone: string;

  @OneToMany(() => Practitioner, (practitionner) => practitionner.hospital)
  practitionners: Practitioner[];
}
