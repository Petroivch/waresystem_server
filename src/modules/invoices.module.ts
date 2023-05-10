import { Module } from '@nestjs/common';
import { InvoicesController } from 'src/controllers/invoices.controller';
import { InvoicesService } from 'src/services/invoices.service';
import { DatasourceModule } from 'src/datasource/datasource.module';
import { Invoice } from 'src/entities/invoice.entity';
import { Warehouse } from 'src/entities/warehouse.entity';
import { Product } from 'src/entities/product.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Client } from 'src/entities/client.entity';

@Module({
  controllers: [InvoicesController],
  providers: [InvoicesService],
  imports: [DatasourceModule, TypeOrmModule.forFeature([Invoice, Product, Warehouse, Client]),
  ],
})
export class InvoicesModule {}
