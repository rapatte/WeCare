import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Medicine } from './medicine.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class MedicineService {
  constructor(
    @InjectRepository(Medicine)
    private allergieRepository: Repository<Medicine>,
  ) {}

  async getAllMedicine(): Promise<Medicine[]> {
    return this.allergieRepository.find();
  }
}
