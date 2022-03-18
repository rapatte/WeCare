import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Allergie } from './allergie.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AllegieService {
  constructor(
    @InjectRepository(Allergie)
    private allergieRepository: Repository<Allergie>,
  ) {}

  async getAllAllergie(): Promise<Allergie[]> {
    return this.allergieRepository.find();
  }
}
