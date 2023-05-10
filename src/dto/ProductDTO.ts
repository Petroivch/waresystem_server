import { ApiProperty } from "@nestjs/swagger";
import { Warehouse } from "src/entities/warehouse.entity";

export class CreateProductDto {
    Id: number;
    @ApiProperty({ example: 'Компьютерная мышь', description: 'Название продукта' })
    ProductName: string;
    @ApiProperty({ example: 'Аксессуары', description: 'Тип продукта' })
    ProductType: string;
    @ApiProperty({ example: '100', description: 'Цена продукта' })
    Cost: number;
  }
  