import { Product } from "src/entities/product.entity";
import { Client } from "src/entities/client.entity";
import { Warehouse } from "src/entities/warehouse.entity";

export class CreateInvoiceDto  {
    Id: number;
    Date: Date;
    UserId: number;
    WareId: number;
    ProductId: number;
    ProductCount: number;
    TypeOfOrder: string;
    /*warehouses: Warehouse[];
    products: Product[];
    clients: Client[];*/
  }
  