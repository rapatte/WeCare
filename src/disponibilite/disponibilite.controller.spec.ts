import { Test, TestingModule } from '@nestjs/testing';
import { DisponibiliteController } from './disponibilite.controller';
import { DesponibliteService } from './disponibilite.service';

describe('AppController', () => {
  let hospitalController: DisponibiliteController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [DisponibiliteController],
      providers: [DesponibliteService],
    }).compile();

    hospitalController = app.get<DisponibiliteController>(
      DisponibiliteController,
    );
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(hospitalController.getAllDisponibilite()).toBe('Hello World!');
    });
  });
});
