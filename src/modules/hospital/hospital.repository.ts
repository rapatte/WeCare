import { EntityRepository, EntityManager } from 'typeorm';
import { Hospital } from './hospital.entity';

@EntityRepository()
class HospitalRepository {
  constructor(private manager: EntityManager) {}

  async getAllHospital() {
    return await this.manager.find(Hospital);
  }

  async addAHospital(hospital: Hospital) {
    return await this.manager.save(Hospital, hospital);
  }
}

export default HospitalRepository;
