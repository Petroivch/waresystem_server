import { Warehouse } from 'src/entities/warehouse.entity';
import { Product } from 'src/entities/product.entity';
import { Client } from './client.entity';
import {
     ViewEntity,
      ViewColumn,
       DataSource } from "typeorm"
import { Invoice } from './invoice.entity';



    @ViewEntity({
        expression: (dataSource: DataSource) =>
            dataSource
                .createQueryBuilder()
                .select("invoice.Id", "Id")
                .addSelect("invoice.Date", "Date")
                .addSelect("client.UserName", "UserName")
                .addSelect("warehouse.WareName", "WareName")
                .addSelect("product.ProductName", "ProductName")
                .addSelect("invoice.ProductCount", "ProductCount")
                .addSelect(`CASE
                WHEN invoice."TypeOfOrder" = 1 THEN 'приход'::text
                WHEN invoice."TypeOfOrder" = 2 THEN 'расход'::text
                ELSE NULL::text
            END`, "InvoiceType")
                .from(Invoice, "invoice")
                .innerJoin(Warehouse, "warehouse", "invoice.WareId = warehouse.Id")
                .innerJoin(Product,  "product", "invoice.ProductId = product.Id")
                .innerJoin(Client,  "client", "invoice.UserId = client.Id")

    })
    export class InvoiceList {
        @ViewColumn()
        Id: number
    
        @ViewColumn()
        Date: string

        @ViewColumn()
        UserName: string
    
        @ViewColumn()
        WareName: string

        
        @ViewColumn()
        ProductName: string

        @ViewColumn()
        ProductCount: string

        @ViewColumn()
        InvoiceType: string
    }