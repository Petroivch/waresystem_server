import { Module } from '@nestjs/common';
import { ProductsController } from 'src/controllers/products.controller';
import { ProductsService } from 'src/services/products.service';
import { DatasourceModule } from 'src/datasource/datasource.module';
import { Product } from 'src/entities/product.entity';
import { Warehouse } from 'src/entities/warehouse.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [ProductsController],
  providers: [ProductsService],
  imports: [DatasourceModule,
    TypeOrmModule.forFeature([Product, Warehouse]),
  ],
})
export class ProductsModule {}
