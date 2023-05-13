import { HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DatasourceService } from "src/datasource/datasource.service";
import { Client } from "src/entities/client.entity";
import { Invoice } from "src/entities/invoice.entity";
import { InvoiceList } from "src/entities/invoicelist.entity";
import { Product } from "src/entities/product.entity";
import { Warehouse } from "src/entities/warehouse.entity";
import { DataSource, In, Repository } from "typeorm";


@Injectable()
export class InvoicelistService {
    
  constructor(
    @InjectRepository(InvoiceList)
    private readonly invoicelistRepository: Repository<InvoiceList>,
    private readonly datasourceService: DatasourceService,
    @InjectRepository(Invoice)
    private readonly invoiceRepository: Repository<Invoice>,
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
    @InjectRepository(Client)
    private readonly clientRepository: Repository<Client>,
    @InjectRepository(Warehouse)
    private readonly warehouseRepository: Repository<Warehouse>, 
  ) {}
  
    async findAll(): Promise<InvoiceList[]> {
      const inv = await this.invoicelistRepository.find();
      return inv;
    }
  
}
