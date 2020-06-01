import { Controller, Get, Param } from '@nestjs/common';
import { StationService } from './station.service';
import { Station } from './station.model';

@Controller('station')
export class StationController {
  constructor(private stationService: StationService) {}

  @Get()  
  getAllStations(): Station[] {
    return this.stationService.getAllStations();
  }

  @Get('/:id')
  getStationById(@Param('id') id: string): Station {
    return this.stationService.getStationById(id);
  }
}
