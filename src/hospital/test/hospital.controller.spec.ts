import { HospitalService } from '../hospital.service';
import HospitalRepositoryMock from './hospital.repository.mock';

const hospitalService = new HospitalService(new HospitalRepositoryMock());
describe('Hospital Service :', () => {
  describe('addAHospital', () => {
    it('should add a hospital in the array of hospitals', async () => {
      const newHospital = await hospitalService.addAHospital({
        name: 'testname',
        address: 'testaddress',
        telephone: 'testtelephone',
      });
      const newHospital1 = await hospitalService.addAHospital({
        name: 'testname1',
        address: 'testaddress1',
        telephone: 'testtelephone1',
      });
      const hospitals = await hospitalService.getAllHospital();
      expect(hospitals[0]).toEqual(newHospital);
      expect(hospitals[1]).toEqual(newHospital1);
    });
  });
  describe('getAllHospital', () => {
    const hospitals = hospitalService.getAllHospital();
    it('should return an array of hospitals', async () => {
      expect((await hospitals).length).toEqual(2);
    });
  });
});
