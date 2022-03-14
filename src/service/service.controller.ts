import { Controller, Get } from '@nestjs/common';
import { Service} from './service.entity';
import { ServiceService } from './service.service';

@Controller()
export class ServiceController {
  constructor(private readonly hospitalService: ServiceService) {}

  @Get('/service')
  getAllServices(): Promise<Service[]> {
    return this.hospitalService.getAllService();
  }
}
