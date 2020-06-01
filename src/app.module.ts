import { Module } from '@nestjs/common';
import { StationModule } from './station/station.module';
import { RiderController } from './rider/rider.controller';
import { RiderService } from './rider/rider.service';
import { TripController } from './trip/trip.controller';
import { TripService } from './trip/trip.service';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';
@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    StationModule,
    AuthModule],
  controllers: [RiderController, TripController],
  providers: [RiderService, TripService],
})
export class AppModule {}
