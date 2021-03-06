import { BaseEntity, Entity, PrimaryGeneratedColumn, Column } from'typeorm';

@Entity()
export class Station extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}