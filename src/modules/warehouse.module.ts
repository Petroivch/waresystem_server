import { Module } from '@nestjs/common';
import { WarehousesController } from 'src/controllers/warehouses.controller';
import { WarehousesService } from 'src/services/warehouses.service';
import { DatasourceModule } from 'src/datasource/datasource.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from 'src/entities/product.entity';
import { Warehouse } from 'src/entities/warehouse.entity';

@Module({
  controllers: [WarehousesController],
  providers: [WarehousesService],
  imports: [DatasourceModule,
    TypeOrmModule.forFeature([Product, Warehouse]), // !!! В модуле автор мы используем все три сущности, поэтому все три сущности необходимо импортирвоать!
  ],
})
export class WarehousesModule {}
