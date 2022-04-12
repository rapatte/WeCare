import { Hospital } from '../hospital.entity';
import { hospital } from '../../../helpers/types/hospital.types';
import { ApiError } from 'src/helpers/error';
import { IHospitalRepository } from 'src/helpers/interfaces/hospital.interface';

export default class HospitalRepositoryMock implements IHospitalRepository {
  hospitals: Hospital[] = [];
  async getAllHospital(): Promise<Hospital[]> {
    return this.hospitals;
  }
  async getOneHospitalById(id): Promise<Hospital> {
    return this.hospitals.find(id);
  }

  async addAHospital(hospital: hospital) {
    const result = new Hospital();
    result.name = hospital.name;
    result.address = hospital.address;
    result.telephone = hospital.telephone;
    if (!result.name || !result.address || !result.telephone)
      throw new ApiError(400, 'Cannot add empty hospital');
    this.hospitals.push(result);
    return result;
  }
}
