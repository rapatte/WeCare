import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServiceController } from './service.controller';
import { ServiceSchema } from './service.schema';
import { ServiceService } from './service.service';

@Module({
  imports: [TypeOrmModule.forFeature([ServiceSchema])],
  controllers: [ServiceController],
  providers: [ServiceService],
})
export class ServiceModule {}
