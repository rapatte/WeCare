import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Hospital } from './hospital.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class HospitalService {
  constructor(
    @InjectRepository(Hospital)
    private hopitalRepository: Repository<Hospital>,
  ) {}

  async getAllHospital(): Promise<Hospital[]> {
    return this.hopitalRepository.find();
  }
}
