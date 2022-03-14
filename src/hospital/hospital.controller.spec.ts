import { Test, TestingModule } from '@nestjs/testing';
import { HospitalController } from './hospital.controller';
import { HospitalService } from './hospital.service';

describe('AppController', () => {
  let hospitalController: HospitalController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [HospitalController],
      providers: [HospitalService],
    }).compile();

    hospitalController = app.get<HospitalController>(HospitalController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(hospitalController.getAllHospital()).toBe('Hello World!');
    });
  });
});
