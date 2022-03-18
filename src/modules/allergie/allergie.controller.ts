import { Controller, Get } from '@nestjs/common';
import { Allergie } from './allergie.entity';
import { AllegieService } from './allergie.service';

@Controller('/allergie')
export class AllegieController {
  constructor(private readonly allergieService: AllegieService) {}

  @Get()
  getAllAllergie(): Promise<Allergie[]> {
    return this.allergieService.getAllAllergie();
  }
}
