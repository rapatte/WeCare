import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HospitalController } from './hospital.controller';
import { HospitalSchema } from './hospital.schema';
import { HospitalService } from './hospital.service';

@Module({
  imports: [TypeOrmModule.forFeature([HospitalSchema])],
  controllers: [HospitalController],
  providers: [HospitalService],
})
export class HopitalModule {}
