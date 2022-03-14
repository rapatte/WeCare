import { Controller, Get } from '@nestjs/common';
import { Hospital } from './hospital.entity';
import { HospitalService } from './hospital.service';

@Controller('/hospital')
export class HospitalController {
  constructor(private readonly hospitalService: HospitalService) {}

  @Get()
  getAllHospital(): Promise<Hospital[]> {
    return this.hospitalService.getAllHospital();
  }
}
