import { EntitySchema } from 'typeorm';
import { Allergie } from './allergie.entity';

export const AllegieSchema = new EntitySchema<Allergie>({
  name: 'Allergie',
  target: Allergie,
  columns: {
    id: {
      type: Number,
      primary: true,
      generated: true,
    },
    code: {
      type: String,
    },
    name: {
      type: String,
    },
  },
});
