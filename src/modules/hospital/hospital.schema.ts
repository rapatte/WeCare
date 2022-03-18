import { EntitySchema } from 'typeorm';
import { Hospital } from './hospital.entity';

export const HospitalSchema = new EntitySchema<Hospital>({
  name: 'Hospital',
  target: Hospital,
  columns: {
    id: {
      type: Number,
      primary: true,
      generated: true,
    },
    name: {
      type: String,
    },
    address: {
      type: String,
    },
    telephone: {
      type: String,
    },
  },
});
