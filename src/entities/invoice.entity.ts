import { Warehouse } from 'src/entities/warehouse.entity';
import { Product } from 'src/entities/product.entity';

import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Client } from './client.entity';

@Entity('invoice') //указываем что это не просто клаcс, а сущность в рамках TypeOrm, в БД будет храниться как таблица
export class Invoice {
  @PrimaryGeneratedColumn() //колонка - идентификатор, значение генерируется автоматически
  Id: number;
  @Column({}) //колонка таблицы, сюда можно добавить большое количество параметров для БД, например тип, уникальность, триггер и т.д.
    Date: Date;
    @Column()
    UserId : number;
    @Column()
    WareId: number;
    @Column()
    ProductId: number;
    @Column()
    ProductCount: number;
    @Column()
    TypeOfOrder: string;
}
  /*  @ManyToMany((type) => Warehouse, (warehouse) => warehouse.invoices) //Создадим связь многие ко многим с сущностью article и свяжем с полем authors в статье
  @JoinTable({
    //join таблица с названием author_article
    name: 'invoice_warehouse',
    joinColumn: { name: 'invoice_WareId' }, //для связи с идентификатором invoice
    inverseJoinColumn: { name: 'warehouse_Id' }, //для связи с идентификатором warehouse
  })
  warehouses: Warehouse[]; //объект, в котором будем автоматически получать все статьи автора

  @ManyToMany((type) => Product, (product) => product.Id) //тоже самое для аффилиаций
  @JoinTable({
    name: 'invoice_product',
    joinColumn: { name: 'ProductId' },
    inverseJoinColumn: { name: 'product_Id' },
  })
  products: Product[];

  @ManyToMany((type) => Product, (product) => product.Id) //тоже самое для аффилиаций
  @JoinTable({
    name: 'invoice_user',
    joinColumn: { name: 'UserId' },
    inverseJoinColumn: { name: 'user_Id' },
  })
  clients: Client[];
  }*/