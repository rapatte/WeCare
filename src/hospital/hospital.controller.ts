import { Body, Controller, Get, HttpStatus, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { Hospital } from './hospital.entity';
import { HospitalService } from './hospital.service';

@Controller('/hospital')
export class HospitalController {
  constructor(private readonly hospitalService: HospitalService) {}

  @Get()
  getAllHospital(): Promise<Hospital[]> {
    return this.hospitalService.getAllHospital();
  }

  @Post()
  async create(
    @Body() hospital: Hospital,
    @Res() response: Response,
  ): Promise<Hospital> {
    const newhospital = await this.hospitalService.addAHospital(hospital);
    response.status(HttpStatus.CREATED).send(newhospital);
    return newhospital;
  }
}
