import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import ormConfig from './config/ormConfig';
import { HopitalModule } from './hospital/hospital.module';
import { PatientModule } from './patient/patient.module';
import { ServiceModule } from './service/service.module';
import { PractitionerModule } from './practitioner/practitioner.module';
import { DesponibliteModule } from './disponibilite/disponibilite.module';
import { AllergieModule } from './allergie/allergie.module';
import { MedicineModule } from './medicine/medicine.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [ormConfig],
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: ormConfig,
    }),
    HopitalModule,
    PatientModule,
    ServiceModule,
    PractitionerModule,
    DesponibliteModule,
    AllergieModule,
    MedicineModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
