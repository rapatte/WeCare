import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PractitionerController } from './practitioner.controller';
import { PractitionerSchema } from './practitioner.schema';
import { PractitionerService } from './practitioner.service';

@Module({
  imports: [TypeOrmModule.forFeature([PractitionerSchema])],
  controllers: [PractitionerController],
  providers: [PractitionerService],
})
export class PractitionerModule {}
