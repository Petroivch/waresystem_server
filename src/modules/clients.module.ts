import { Module } from '@nestjs/common';
import { ClientsController } from 'src/controllers/clients.controller';
import { ClientsService } from 'src/services/clients.service';
import { DatasourceModule } from 'src/datasource/datasource.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Client } from 'src/entities/client.entity';
import { Invoice } from 'src/entities/invoice.entity';
import { Product } from 'src/entities/product.entity';


@Module({
  controllers: [ClientsController],
  providers: [ClientsService],
  imports: [DatasourceModule,
    TypeOrmModule.forFeature([Invoice, Product, Client]), // !!! В модуле автор мы используем все три сущности, поэтому все три сущности необходимо импортирвоать!
  ],
})
export class ClientsModule {}
