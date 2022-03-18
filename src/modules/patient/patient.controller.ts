import { Controller, Get } from '@nestjs/common';
import { Patient } from './patient.entity';
import { PatientService } from './patient.service';

@Controller('/patient')
export class PatientController {
  constructor(private readonly patientService: PatientService) {}

  @Get()
  getAllPatient(): Promise<Patient[]> {
    return this.patientService.getAllPatient();
  }
}
