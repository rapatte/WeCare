import { Hospital } from 'src/modules/hospital/hospital.entity';
import { hospital } from '../types/hospital.types';

export interface IHospitalService {
  getAllHospital(): Promise<Hospital[]>;
  addAHospital(hospitalData: hospital): Promise<Hospital>;
}

export interface IHospitalRepository {
  getAllHospital(): Promise<Hospital[]>;
  addAHospital(hospital: hospital): Promise<Hospital>;
}
