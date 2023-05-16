import { Product } from 'src/entities/product.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Invoice } from './invoice.entity';

@Entity('warehouse')
export class Warehouse {
  @PrimaryGeneratedColumn()
    Id: number;
    @Column()
    WareName: string;
    @Column()
    WareAddress: string;
    @ManyToMany((type) => Invoice, (invoice) => invoice.warehouses)
  @JoinTable({
    name: 'invoice',
    joinColumn: { name: 'warehouse_Id' },
    inverseJoinColumn: { name: 'invoice_WareId' },
  })
  invoices: Invoice[];

  }
  