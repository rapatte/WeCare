import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DisponibiliteController } from './disponibilite.controller';
import { DisponibliteSchema } from './disponibilite.shema';
import { DisponibliteService } from './disponibilite.service';

@Module({
  imports: [TypeOrmModule.forFeature([DisponibliteSchema])],
  controllers: [DisponibiliteController],
  providers: [DisponibliteService],
})
export class DisponibliteModule {}
