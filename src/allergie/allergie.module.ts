import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AllegieController } from './allergie.controller';
import { AllegieSchema } from './allergie.schema';
import { AllegieService } from './allergie.service';

@Module({
  imports: [TypeOrmModule.forFeature([AllegieSchema])],
  controllers: [AllegieController],
  providers: [AllegieService],
})
export class AllergieModule {}
