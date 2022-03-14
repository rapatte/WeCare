import { Test, TestingModule } from '@nestjs/testing';
import { ServiceController } from './service.controller';
import { ServiceService } from './service.service';

describe('AppController', () => {
  let serviceController: ServiceController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ServiceController],
      providers: [ServiceService],
    }).compile();

    serviceController = app.get<ServiceController>(ServiceController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(serviceController.getAllService()).toBe('Hello World!');
    });
  });
});
