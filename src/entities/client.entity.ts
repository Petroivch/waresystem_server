import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
//@Entity({ name: 'account', schema: 'companydbo' })
export class Client {
  @PrimaryGeneratedColumn()
    Id: number;
    @Column()
    UserName: string;
    @Column()
    UserAddress: string;
  }
  