import { Module } from '@nestjs/common';
import { StationModule } from './station/station.module';
import { RiderController } from './rider/rider.controller';
@Module({
  imports: [StationModule],
  controllers: [RiderController],
})
export class AppModule {}
