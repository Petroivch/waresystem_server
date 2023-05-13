import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';
import { InvoiceListController } from 'src/controllers/invoicelist.controller';
import { DatasourceModule } from 'src/datasource/datasource.module';
import { Client } from 'src/entities/client.entity';
import { Invoice } from 'src/entities/invoice.entity';
import { InvoiceList } from 'src/entities/invoicelist.entity';
import { Product } from 'src/entities/product.entity';
import { Warehouse } from 'src/entities/warehouse.entity';
import { InvoicelistService } from 'src/services/invoicelist.service';

@Module({
  controllers: [InvoiceListController],
  providers: [InvoicelistService],
  imports: [DatasourceModule, TypeOrmModule.forFeature([InvoiceList, Invoice, Product, Warehouse, Client]),
  ],
})
export class InvoiceListModule {}
