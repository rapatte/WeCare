import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
  Res,
} from '@nestjs/common';

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

  @Get(':id')
  async getOneHospitalById(
    @Res() response: Response,
    @Param('id') id: number,
  ): Promise<void> {
    try {
      const hospital = await this.hospitalService.getOneHospitalById(id);
      response.status(HttpStatus.FOUND).send(hospital);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.NOT_FOUND);
    }
  }
  @Delete(':id')
  async delete(
    @Res() response: Response,
    @Param('id') id: number,
  ): Promise<void> {
    try {
      const hopital = await this.hospitalService.delete(id);
      response.status(HttpStatus.FOUND).send(hopital);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.NOT_FOUND);
    }
  }

  @Post()
  async create(
    @Body() hospital: Hospital,
    @Res() response: Response,
  ): Promise<void> {
    const newhospital = await this.hospitalService.addAHospital(hospital);
    response.status(HttpStatus.CREATED).json(newhospital);
  }
}
