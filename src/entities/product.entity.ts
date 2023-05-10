import { ApiProperty } from '@nestjs/swagger';
import { Warehouse } from 'src/entities/warehouse.entity';

import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('product')
export class Product {

  @ApiProperty({ example: '1', description: 'Уникальный идентификатор' })
  @PrimaryGeneratedColumn()
    Id: number;
    @Column()
    @ApiProperty({ example: 'Компьютерная мышь', description: 'Название продукта' })
    ProductName: string;
    @Column()
    @ApiProperty({ example: 'Аксессуары', description: 'Тип продукта' })
    ProductType: string;
    @Column()
    @ApiProperty({ example: '100', description: 'Цена продукта' })
    Cost: number;
  }