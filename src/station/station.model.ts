import {Rider} from '../rider/rider.model';

export interface Station {
  id: string;
  name: string;
  Rider: Rider;
}
