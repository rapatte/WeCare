import { Controller, Get } from '@nestjs/common';
import { Practitioner } from './practitioner.entity';
import { PractitionerService } from './practitioner.service';

@Controller('/practitioner')
export class PractitionerController {
  constructor(private readonly practitionerService: PractitionerService) {}

  @Get()
  getAllPractitioner(): Promise<Practitioner[]> {
    return this.practitionerService.getAllPractitioner();
  }
}
