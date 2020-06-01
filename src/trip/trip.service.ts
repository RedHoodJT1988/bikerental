import { Injectable } from '@nestjs/common';
import { Trip } from './trip.model';
import { Station } from '../station/station.entity';

@Injectable()
export class TripService {
  private trips = [];

  // TODO: Add method for returning last 20 trips for a given station
  
}
