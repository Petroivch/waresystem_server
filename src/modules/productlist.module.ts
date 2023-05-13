import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductlistController } from 'src/controllers/productlist.controller';
import { DatasourceModule } from 'src/datasource/datasource.module';
import { Productlist } from 'src/entities/productlist.entity';
import { ProductlistService } from 'src/services/productlist.service';

@Module({
  controllers: [ProductlistController],
  providers: [ProductlistService],
  imports: [DatasourceModule, TypeOrmModule.forFeature([Productlist]),
  ],
})
export class ProductlistModule {}
