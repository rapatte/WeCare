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
    const seacrchedPractioners =
      await this.practitionerService.searchPractitioners(query);
    response.status(HttpStatus.FOUND).send(seacrchedPractioners);
  }

  @Post()
  async createPractitioner(
    @Body() practitioner: Practitioner,
    @Res() response: Response,
  ): Promise<Practitioner | void> {
    const ractitionerProperties = Object.values(practitioner);
    ractitionerProperties.map((propertie) => {
      if (propertie === '') {
        throw new HttpException(
          'Tous les champs doivent être renseignés',
          HttpStatus.BAD_REQUEST,
        );
      }
    });
    const newMission = await this.practitionerService.createPractitioner(
      practitioner,
    );
    response.status(HttpStatus.CREATED).send(newMission);
  }
}
