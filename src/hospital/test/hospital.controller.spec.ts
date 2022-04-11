import { HospitalService } from '../hospital.service';
import HospitalRepositoryMock from './hospital.repository.mock';

const hospitalService = new HospitalService(new HospitalRepositoryMock());

describe('AppController', () => {
  // let hospitalController: HospitalController;

  beforeEach(async () => {
    //   const app: TestingModule = await Test.createTestingModule({
    //     controllers: [HospitalController],
    //     providers: [HospitalService, HospitalsRepositoryMock],
    //   }).compile();
    //   hospitalController = app.get<HospitalController>(HospitalController);
  });

  describe('getAllHospital', () => {
    // const hospitalService = new HospitalService(HospitalsRepositoryMock);

    it('should return an array of hospitals', () => {
      expect(hospitalService.getAllHospital()).toEqual([]);
      console.log([])
    });
  });
});
