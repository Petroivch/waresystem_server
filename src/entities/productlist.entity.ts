import { ViewEntity, ViewColumn, DataSource } from "typeorm"


    @ViewEntity({
        expression: `
        SELECT product."Id",
        product."ProductName",
        product."ProductType",
        product."ProductDescription",
        product."Cost",
        product."Image",
        stock."Quantity",
        warehouse."WareName"
        FROM product
         JOIN stock ON product."Id" = stock."ProductId"
         JOIN warehouse ON stock."WareId" = warehouse."Id"
    `
    })
    export class Productlist {
        @ViewColumn()
        Id: number
    
        @ViewColumn()
        ProductName: string

        @ViewColumn()
        ProductType: string
    
        @ViewColumn()
        ProductDescription: string

        
        @ViewColumn()
        Cost: string

        @ViewColumn()
        Image: string

        @ViewColumn()
        Quantity: string

        @ViewColumn()
        WareName: string
    }