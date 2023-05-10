import { Injectable } from '@nestjs/common';
import { Invoice } from 'src/entities/invoice.entity';
import { Warehouse } from '../entities/warehouse.entity';
import { Client } from '../entities/client.entity';
import { Product } from '../entities/product.entity';


@Injectable()
export class DatasourceService {
  private clients: Client[] = [];
  private invoices: Invoice[] = [];
  private warehouses: Warehouse[] = [];
  private products: Product[] = [];

  getClients(): Client[] {
    return this.clients;
  }
  getInvoices(): Invoice[] {
    return this.invoices;
  }
  getWarehouses(): Warehouse[] {
    return this.warehouses;
  }
  getProducts(): Product[] {
    return this.products;
  }
}