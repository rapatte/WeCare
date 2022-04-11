import { EntitySchema } from 'typeorm';
import { Practitioner } from './practitioner.entity';

export const PractitionerSchema = new EntitySchema<Practitioner>({
  name: 'Practitioner',
  target: Practitioner,
  columns: {
    id: {
      type: Number,
      primary: true,
      generated: true,
    },
    firstname: {
      type: String,
    },
    lastname: {
      type: String,
    },
    mail: {
      type: String,
    },
    city: {
      type: String,
    },
    specialization: {
      type: String,
    },
    hospital: {
      type: Number,
    },
  },
});
