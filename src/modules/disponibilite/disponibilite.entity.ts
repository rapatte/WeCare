import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BaseEntity,
  OneToOne,
  JoinColumn,
} from 'typeorm';

import { Practitioner } from '../practitioner/practitioner.entity';

@Entity()
export class Disponibilite extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  date: string;

  @OneToOne(() => Practitioner)
  @JoinColumn()
  Practitioner: Practitioner;
}
