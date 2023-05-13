import { Module } from '@nestjs/common';
import { ClientsModule } from 'src/modules/clients.module';
import { DatasourceModule } from './datasource/datasource.module';
import { InvoicesModule } from './modules/invoices.module';
import { ProductsModule } from './modules/products.module';
import { WarehousesModule } from './modules/warehouse.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InvoiceListModule } from './modules/invoicelist.module';
import { ProductlistModule } from './modules/productlist.module';


@Module({
  imports: [ClientsModule,
     InvoicesModule,
     InvoiceListModule,
     ProductlistModule,
      ProductsModule,
       WarehousesModule,
        DatasourceModule,
        TypeOrmModule.forRoot({
          type: 'postgres', //тип подключаемой БД
          port: 5432, //порт
          database: 'sklad',
          username: 'postgres', //имя пользователя
          password: '123', //пароль
          host: 'localhost', //хост, в нашем случае БД развернута локально
          synchronize: false, //отключаем автосинхронизацию(в противном случае при каждом перезапуске наша БД будет создаваться заново)
          logging: 'all', //включим логирование для удобства отслеживания процессов
          entities: ['dist/**/*.entity.{ts,js}'], //указываем путь к сущностям
        }),    
      ],
  controllers: [],
  providers: [],
})
export class AppModule {}
