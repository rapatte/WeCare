import { EntitySchema } from 'typeorm';
import { Disponibilite } from './disponibilite.entity';

export const DisponibliteSchema = new EntitySchema<Disponibilite>({
  name: 'Disponibilite',
  target: Disponibilite,
  columns: {
    id: {
      type: Number,
      primary: true,
      generated: true,
    },
    date: {
      type: String,
    },
  },
});
