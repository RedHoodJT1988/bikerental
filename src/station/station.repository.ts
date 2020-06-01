import { Station } from './station.entity';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(Station) 
export class StationRepository extends Repository<Station> {
  
}