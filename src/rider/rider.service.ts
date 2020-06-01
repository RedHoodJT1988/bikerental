import { Injectable } from '@nestjs/common';
import { Rider } from './rider.model';

@Injectable()
export class RiderService {
  private riders = [];

  getAllRiders(): Rider[] {
    return this.riders;
  }

  getRiderByStationAndAge(age: number): Rider {
    if (age <= 20) {
      return this.riders.find(rider => rider.age);
    } else if (age >= 21 || age <= 30) {
      return this.riders.find(rider => rider.age);
    } else if (age >= 31 || age <= 40) {
      return this.riders.find(rider => rider.age);
    } else if (age >= 41 || age <= 50) {
      return this.riders.find(rider => rider.age);
    } else if (age >= 51){
      return this.riders.find(rider => rider.age);
    } else {
      this.riders.find(rider => rider.age);
    }
      
  }
}
