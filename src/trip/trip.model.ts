import { Rider } from '../rider/rider.model';
import { Station } from 'src/station/station.model';

export interface Trip {
  date: Date;
  beginning: Station;
  destination: Station;
  time: Date;
  rider: Rider;
}