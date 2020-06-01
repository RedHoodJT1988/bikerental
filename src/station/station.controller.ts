import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { StationService } from './station.service';
import { Station } from './station.entity';

@Controller('station')
export class StationController {
  constructor(private stationService: StationService) {}

  @Get('/:id')
  getStationById(@Param('id', ParseIntPipe) id: number): Promise<Station> {
    return this.stationService.getStationById(id);
  }
}
