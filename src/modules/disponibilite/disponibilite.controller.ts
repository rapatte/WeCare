import { Controller, Get } from '@nestjs/common';
import { Disponibilite } from './disponibilite.entity';
import { DisponibliteService } from './disponibilite.service';

@Controller()
export class DisponibiliteController {
  constructor(private readonly disponibiliteService: DisponibliteService) {}

  @Get('/disponibilite')
  getAllDisponibilite(): Promise<Disponibilite[]> {
    return this.disponibiliteService.getAllDesponiblite();
  }
}
