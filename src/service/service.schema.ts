import { EntitySchema } from 'typeorm';
import { Service } from './service.entity';

export const ServiceSchema = new EntitySchema<Service>({
  name: 'Service',
  target: Service,
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
