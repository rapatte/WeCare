import { Test, TestingModule } from '@nestjs/testing';
import { AllegieController } from './allergie.controller';
import { AllegieService } from './allergie.service';

describe('AppController', () => {
  let allergieController: AllegieController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AllegieController],
      providers: [AllegieService],
    }).compile();

    allergieController = app.get<AllegieController>(AllegieController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(allergieController.getAllAllergie()).toBe('Hello World!');
    });
  });
});
