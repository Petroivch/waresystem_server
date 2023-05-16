import { ApiProperty } from '@nestjs/swagger';
import { Warehouse } from 'src/entities/warehouse.entity';

import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Invoice } from './invoice.entity';

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
    @ManyToMany((type) => Invoice, (invoice) => invoice.products)
    @JoinTable({
      name: 'invoice',
      joinColumn: { name: 'product_Id' },
      inverseJoinColumn: { name: 'invoice_ProductId' },
    })
    invoices: Invoice[];
  }