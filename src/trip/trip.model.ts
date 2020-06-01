import { Rider } from '../rider/rider.model';
import { Station } from 'src/station/station.entity';

export interface Trip {
  date: Date;
  beginning: Station;
  destination: Station;
  time: Date;
  rider: Rider;
}