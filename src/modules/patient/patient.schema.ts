import { EntitySchema } from 'typeorm';
import { Patient } from './patient.entity';

export const PatientSchema = new EntitySchema<Patient>({
  name: 'Patient',
  target: Patient,
  columns: {
    id: {
      type: Number,
      primary: true,
      generated: true,
    },
    name: {
      type: String,
    },
    firstName: {
      type: String,
    },
    email: {
      type: String,
    },
    address: {
      type: String,
    },
    telephone: {
      type: String,
    },
    allergens: {
      type: String,
    },
  },
});
