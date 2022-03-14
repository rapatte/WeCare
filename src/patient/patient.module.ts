import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PatientController } from './patient.controller';
import { PatientSchema } from './patient.schema';
import { PatientService } from './patient.service';

@Module({
  imports: [TypeOrmModule.forFeature([PatientSchema])],
  controllers: [PatientController],
  providers: [PatientService],
})
export class PatientModule {}
