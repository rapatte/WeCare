import { Inject, Injectable } from '@nestjs/common';
import { ApiError } from 'src/helpers/error';
import {
  IHospitalRepository,
  IHospitalService,
} from 'src/helpers/interfaces/hospital.interface';
import { Hospital } from './hospital.entity';
import HospitalRepository from './hospital.repository';
@Injectable()
export class HospitalService implements IHospitalService {
  constructor(
    @Inject(HospitalRepository)
    private hospitalRepository: IHospitalRepository,
  ) {}

  async getAllHospital(): Promise<Hospital[]> {
    return this.hospitalRepository.getAllHospital();
  }

  async addAHospital(hospital): Promise<Hospital> {
    if (!hospital.name || !hospital.address || !hospital.telephone) {
      throw new ApiError(400, 'Hospital property cannot be empty');
    } else {
      return this.hospitalRepository.addAHospital(hospital);
    }
  }
}
