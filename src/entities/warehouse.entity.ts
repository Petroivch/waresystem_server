import { Product } from 'src/entities/product.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('warehouse')
export class Warehouse {
  @PrimaryGeneratedColumn()
    Id: number;
    @Column()
    WareName: string;
    @Column()
    WareAddress: string;
  }
  