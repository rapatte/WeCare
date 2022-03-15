import { EntitySchema } from 'typeorm';
import { Medicine } from './medicine.entity';

export const MedicineSchema = new EntitySchema<Medicine>({
  name: 'Medicine',
  target: Medicine,
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
