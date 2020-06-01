import { Module } from '@nestjs/common';
import { StationController } from './station.controller';
import { StationService } from './station.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StationRepository } from './station.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([StationRepository])
  ],
  controllers: [StationController],
  providers: [StationService]
})
export class StationModule {}
