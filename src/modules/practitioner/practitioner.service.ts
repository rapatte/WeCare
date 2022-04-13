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
    const practitioners = await this.practitionerRepository.find();
    return practitioners;
  }

  async createPractitioner(practitioner): Promise<Practitioner> {
    const newpractitioner = await this.practitionerRepository.save(
      practitioner,
    );
    return newpractitioner;
  }

  async searchPractitioners(array) {
    let keywords = array.query;
    // SEARCH WITH ONE WORD RETURNS STRING AND NOT ARRAY
    if (typeof keywords === 'string') keywords = [keywords];

    const practitioners = [];
    await Promise.all(
      keywords.map(async (keyword: string) => {
        const request = await this.practitionerRepository.find({
          where: [
            { firstname: Like(`%${keyword}%`) },
            { lastname: Like(`%${keyword}%`) },
            { specialization: Like(`%${keyword}%`) },
            { city: Like(`%${keyword}%`) },
            { hospital: Like(`%${keyword}%`) },
          ],
        });
        request.forEach((res) => practitioners.push(res));
      }),
    );
    return practitioners;
  }
}
