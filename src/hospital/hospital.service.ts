import {
  HttpException,
  HttpStatus,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Hospital } from './hospital.entity';
import { InjectRepository } from '@nestjs/typeorm';
import HospitalRepository from './hospital.repository';
import { identity } from 'rxjs';

export interface IHospitalRepository {
  getAllHospital(): Promise<Hospital[]>;
  getOneHospitalById(id: number): Promise<Hospital>;
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

  async getOneHospitalById(id: number): Promise<Hospital> {
    const hospital = await this.hospitalRepository.getOneHospitalById(id);
    if (!hospital) {
      throw new Error('hospital not found.');
    }
    // console.log(hospital, 'bbbbb');
    return hospital;
  }

  async addAHospital(hospital): Promise<Hospital> {
    return this.hospitalRepository.addAHospital(hospital);
  }
}
