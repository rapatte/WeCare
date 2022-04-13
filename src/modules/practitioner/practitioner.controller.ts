import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Post,
  Query,
  Res,
} from '@nestjs/common';
import { Response } from 'express';
import { Practitioner } from './practitioner.entity';
import { PractitionerService } from './practitioner.service';

@Controller('/practitioner')
export class PractitionerController {
  constructor(private readonly practitionerService: PractitionerService) {}

  @Get()
  getAllPractitioner(): Promise<Practitioner[]> {
    return this.practitionerService.getAllPractitioner();
  }
  @Get('search')
  async searchPractitioners(
    @Res() response: Response,
    @Query() query: string,
  ): Promise<void> {
    try {
      const seacrchedPractioners =
        await this.practitionerService.searchPractitioners(query);
      response.status(HttpStatus.OK).send(seacrchedPractioners);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.NOT_FOUND);
    }
  }

  @Post()
  async createPractitioner(
    @Body() practitioner: Practitioner,
    @Res() response: Response,
  ): Promise<Practitioner | void> {
    try {
      const newPractitioner = await this.practitionerService.createPractitioner(
        practitioner,
      );
      response.status(HttpStatus.CREATED).send(newPractitioner);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.NOT_FOUND);
    }
  }
}
