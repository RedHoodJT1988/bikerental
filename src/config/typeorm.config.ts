import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const typeOrmConfig: TypeOrmModuleOptions = {
  // Basic typeorm configuration to connect to database
  // This is filled with some dummy data as per the instructions
  // I didn't connect to a third party database.
  type: 'mysql',
  host: 'localhost',
  port: 1234,
  username: 'root',
  password: 'admin',
  database: 'bikerental',
  entities: [__dirname + '/../**/*.entity.ts'],
  synchronize: true, // in production this should not be set to true
}