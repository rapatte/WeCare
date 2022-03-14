import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Service } from './service.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ServiceService {
  constructor(
    @InjectRepository(Service)
    private serviceRepository: Repository<Service>,
  ) {}

  async getAllService(): Promise<Service[]> {
    return this.serviceRepository.find();
  }
}
