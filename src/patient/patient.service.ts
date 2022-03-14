import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Patient } from './patient.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class PatientService {
  constructor(
    @InjectRepository(Patient)
    private patientRepository: Repository<Patient>,
  ) {}

  async getAllPatient(): Promise<Patient[]> {
    return this.patientRepository.find();
  }
}
