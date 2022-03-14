import { Test, TestingModule } from '@nestjs/testing';
import { PractitionerController } from './practitioner.controller';
import { PractitionerService } from './practitioner.service';

describe('AppController', () => {
  let practitionerController: PractitionerController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [PractitionerController],
      providers: [PractitionerService],
    }).compile();

    practitionerController = app.get<PractitionerController>(
      PractitionerController,
    );
  });

  describe('getAllPractitioner', () => {
    it('should return the list of all practitioner', () => {
      expect(practitionerController.getAllPractitioner()).toBe('Hello World!');
    });
  });
});
