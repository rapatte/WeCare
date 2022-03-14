import { Controller, Get } from '@nestjs/common';
import { Disponibilite } from './disponibilite.entity';
import { DesponibliteService } from './disponibilite.service';

@Controller()
export class DisponibiliteController {
  constructor(private readonly disponibiliteService: DesponibliteService) {}

  @Get('/disponibilite')
  getAllDisponibilite(): Promise<Disponibilite[]> {
    return this.disponibiliteService.getAllDesponiblite();
  }
}
