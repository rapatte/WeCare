import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MedicineController } from './medicine.controller';
import { MedicineService } from './medicine.service';
import { MedicineSchema } from './medicine.schema';

@Module({
  imports: [TypeOrmModule.forFeature([MedicineSchema])],
  controllers: [MedicineController],
  providers: [MedicineService],
})
export class MedicineModule {}
