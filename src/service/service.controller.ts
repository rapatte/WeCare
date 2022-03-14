import { Controller, Get } from '@nestjs/common';
import { Service } from './service.entity';
import { ServiceService } from './service.service';

@Controller('/service')
export class ServiceController {
  constructor(private readonly serviceService: ServiceService) {}

  @Get()
  getAllService(): Promise<Service[]> {
    return this.serviceService.getAllService();
  }
}
