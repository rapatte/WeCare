import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import ormConfig from './config/ormConfig';
import { HopitalModule } from './hospital/hospital.module';
import { ServiceModule } from './service/service.module';
import { PractitionerModule } from './practitioner/practitioner.module';


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
    ServiceModule,
    PractitionerModule,

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
