import { Hospital } from '../hospital.entity';
import { hospital } from '../../helpers/types/hospital.types';
import { IHospitalRepository } from '../hospital.service';

export default class HospitalRepositoryMock implements IHospitalRepository {
  hospitals: Hospital[] = [];
  async getAllHospital(): Promise<Hospital[]> {
    return this.hospitals;
  }

  async addAHospital(hospital: hospital) {
    const result = new Hospital();
    result.name = hospital.name;
    result.address = hospital.address;
    result.telephone = hospital.telephone;
    this.hospitals.push(result);
    return result;
  }
}
