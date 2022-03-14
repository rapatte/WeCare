import { Body, Controller, Get, HttpStatus, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { Service } from './service.entity';
import { ServiceService } from './service.service';

@Controller('/service')
export class ServiceController {
  constructor(private readonly serviceService: ServiceService) {}

  @Get()
  getAllService(): Promise<Service[]> {
    return this.serviceService.getAllService();
  }

  @Post()
  async create(
    @Body() service: Service,
    @Res() response: Response,
  ): Promise<void> {
    const newservice = await this.serviceService.addAService(service);
    response.status(HttpStatus.CREATED).send(newservice);
  }
}
