import { Injectable } from '@nestjs/common';
import { Like, Repository } from 'typeorm';
import { Practitioner } from './practitioner.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class PractitionerService {
  constructor(
    @InjectRepository(Practitioner)
    private practitionerRepository: Repository<Practitioner>,
  ) {}

  async getAllPractitioner(): Promise<Practitioner[]> {
    return this.practitionerRepository.find();
  }

  async createPractitioner(practitioner): Promise<void> {
    return this.practitionerRepository.save(practitioner);
  }

  async searchPractitioners(keyword): Promise<Practitioner[]> {
    const practitionerListing = [];
    if (typeof keyword.query === 'string') {
      return await this.practitionerRepository.find({
        where: [
          { firstname: Like(`%${keyword.query}%`) },
          { lastname: Like(`%${keyword.query}%`) },
          { specialization: Like(`%${keyword.query}%`) },
          { city: Like(`%${keyword.query}%`) },
          { hospital: Like(`%${keyword.query}%`) },
        ],
      });
    }
    keyword.query.map(async (el) => {
      const practitioner = await this.practitionerRepository.find({
        where: [
          { firstname: Like(`%${el}%`) },
          { lastname: Like(`%${el}%`) },
          { specialization: Like(`%${el}%`) },
          { city: Like(`%${el}%`) },
          { hospital: Like(`%${el}%`) },
        ],
      });
      practitionerListing.push(practitioner);
      return practitionerListing;
    });
  }
}
