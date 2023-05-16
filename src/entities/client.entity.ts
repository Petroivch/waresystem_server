import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Invoice } from './invoice.entity';

@Entity()
//@Entity({ name: 'account', schema: 'companydbo' })
export class Client {
  @PrimaryGeneratedColumn()
    Id: number;
    @Column()
    UserName: string;
    @Column()
    UserAddress: string;
    @ManyToMany((type) => Invoice, (invoice) => invoice.clients)
    @JoinTable({
      name: 'invoice',
      joinColumn: { name: 'client_Id' },
      inverseJoinColumn: { name: 'invoice_UserId' },
    })
    invoices: Invoice[];
  }
  