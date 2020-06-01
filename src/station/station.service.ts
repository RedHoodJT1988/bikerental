import { Injectable, NotFoundException } from '@nestjs/common';
import {Station } from './station.entity';
import { StationRepository } from './station.repository';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class StationService {
  constructor(
    @InjectRepository(StationRepository)
    private stationRepository: StationRepository,
  ) {}

  async getStationById(id: number): Promise<Station> {
    const foundStation = await this.stationRepository.findOne(id);

    if (!foundStation) {
      throw new NotFoundException(`Station with ID "${id}" not found`);
    }

    return foundStation;

  }
}
