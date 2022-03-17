import { Inject, Injectable } from '@nestjs/common';
import { Hospital } from './hospital.entity';
import { InjectRepository } from '@nestjs/typeorm';
import HospitalRepository from './hospital.repository';

export interface IHospitalRepository {
  getAllHospital(): Promise<Hospital[]>;
  addAHospital(hospital: Hospital): Promise<Hospital>;
}
@Injectable()
export class HospitalService {
  constructor(
    @Inject(HospitalRepository)
    private hospitalRepository: IHospitalRepository,
  ) {}

  async getAllHospital(): Promise<Hospital[]> {
    return this.hospitalRepository.getAllHospital();
  }

  async addAHospital(hospital: Hospital): Promise<Hospital> {
    return this.hospitalRepository.addAHospital(hospital);
  }
}
