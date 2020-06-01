import { Injectable } from '@nestjs/common';
import { Station } from './station.model';
// import * as uuid from 'uuid/v1';

@Injectable()
export class StationService {
  private stations = [];

  getAllStations(): Station[] {
    return this.stations;
  }

  getStationById(id: string): Station {
    return this.stations.find(station => station.id === id);
  }
}
