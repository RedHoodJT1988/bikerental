import { BaseEntity, Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

export class User extends BaseEntity{
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  password: string;
}