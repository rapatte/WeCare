import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Disponibilite } from './disponibilite.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class DisponibliteService {
  constructor(
    @InjectRepository(Disponibilite)
    private desponibiliteRepository: Repository<Disponibilite>,
  ) {}

  async getAllDesponiblite(): Promise<Disponibilite[]> {
    return this.desponibiliteRepository.find();
  }
}
