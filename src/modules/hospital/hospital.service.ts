<<<<<<< HEAD:src/modules/hospital/hospital.service.ts
import { Inject, Injectable } from '@nestjs/common';
import { ApiError } from 'src/helpers/error';
import {
  IHospitalRepository,
  IHospitalService,
} from 'src/helpers/interfaces/hospital.interface';
=======
import {
  HttpException,
  HttpStatus,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
>>>>>>> 3e276da ( get hopital by id):src/hospital/hospital.service.ts
import { Hospital } from './hospital.entity';
import HospitalRepository from './hospital.repository';
<<<<<<< HEAD:src/modules/hospital/hospital.service.ts
=======
import { identity } from 'rxjs';

export interface IHospitalRepository {
  getAllHospital(): Promise<Hospital[]>;
  getOneHospitalById(id: number): Promise<Hospital>;
  addAHospital(hospital: Hospital): Promise<Hospital>;
}
>>>>>>> 3e276da ( get hopital by id):src/hospital/hospital.service.ts
@Injectable()
export class HospitalService implements IHospitalService {
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
  async getOneHospitalById(id: number): Promise<Hospital> {
    const hospital = await this.hospitalRepository.getOneHospitalById(id);
    if (!hospital) {
      throw new Error('hospital not found.');
    }
    // console.log(hospital, 'bbbbb');
    return hospital;
  }

  async addAHospital(hospital): Promise<Hospital> {
    if (!hospital.name || !hospital.address || !hospital.telephone) {
      throw new ApiError(400, 'Hospital property cannot be empty');
    } else {
      return this.hospitalRepository.addAHospital(hospital);
    }
  }
}
