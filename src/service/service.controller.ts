import { Controller, Get } from '@nestjs/common';
import { Service} from './service.entity';
import { ServiceService } from './service.service';

@Controller()
export class ServiceController {
  constructor(private readonly ServiceService: ServiceService) {}

  @Get('/service')
  getAllService(): Promise<Service[]> {
    return this.ServiceService.getAllService();
  }
}
