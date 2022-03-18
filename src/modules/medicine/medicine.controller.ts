import { Controller, Get } from '@nestjs/common';
import { Medicine } from './medicine.entity';
import { MedicineService } from './medicine.service';

@Controller('/medicine')
export class MedicineController {
  constructor(private readonly medicineService: MedicineService) {}

  @Get()
  getAllMedicine(): Promise<Medicine[]> {
    return this.medicineService.getAllMedicine();
  }
}
