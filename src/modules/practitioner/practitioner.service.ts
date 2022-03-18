import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Practitioner } from './practitioner.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class PractitionerService {
  constructor(
    @InjectRepository(Practitioner)
    private practitionerRepository: Repository<Practitioner>,
  ) {}

  async getAllPractitioner(): Promise<Practitioner[]> {
    return this.practitionerRepository.find();
  }
}
