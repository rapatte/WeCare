import { EntityRepository, EntityManager, Any } from 'typeorm';
import { Hospital } from './hospital.entity';

@EntityRepository()
class HospitalRepository {
  constructor(private manager: EntityManager) {}

  async getAllHospital() {
    return await this.manager.find(Hospital);
  }
  async getOneHospitalById(id: number) {
    return await this.manager.findOne(Hospital, id);
  }
  async addAHospital(hospital: Hospital) {
<<<<<<< HEAD:src/modules/hospital/hospital.repository.ts
=======
    console.log(hospital);
>>>>>>> 3e276da ( get hopital by id):src/hospital/hospital.repository.ts
    return await this.manager.save(Hospital, hospital);
  }
}

export default HospitalRepository;
