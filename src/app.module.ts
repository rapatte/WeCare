import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import ormConfig from './config/ormConfig';
import {
  HopitalModule,
  PatientModule,
  ServiceModule,
  PractitionerModule,
  DisponibliteModule,
  AllergieModule,
  MedicineModule,
} from './modules';
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
    DisponibliteModule,
    AllergieModule,
    MedicineModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
