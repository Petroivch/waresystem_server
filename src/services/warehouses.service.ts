import { HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm/dist/common/typeorm.decorators";
import { DatasourceService } from "src/datasource/datasource.service";
import { CreateWarehouseDto } from "src/dto/WarehouseDTO";
import { Invoice } from "src/entities/invoice.entity";
import { Product } from "src/entities/product.entity";
import { In, Repository } from "typeorm";
import { Warehouse } from "../entities/warehouse.entity";

@Injectable()
export class WarehousesService {
  constructor(
    private readonly datasourceService: DatasourceService,
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>, // "внедряем" репозиторий Affiliation в сервис
    @InjectRepository(Warehouse)
    private readonly warehouseRepository: Repository<Warehouse>, // "внедряем" репозиторий Artilcle в сервис
  ) {}

  async create(warehouseDTO: CreateWarehouseDto): Promise<Warehouse>
  {
     //получаем объект CreateInvoiceDto
     const warehouse = this.warehouseRepository.create(); //создаем объект Invoice из репозитория
     warehouse.WareName = warehouseDTO.WareName; //заполняем поля объекта Invoice
     warehouse.WareAddress = warehouseDTO.WareAddress;
     await this.warehouseRepository.save(warehouse); //сохраняем объект Invoice в БД
     return warehouse; //возвращаем объект Invoice
    }
    
    findOne(Id: number): Promise<Warehouse> {
      // Promise<Invoice> - указывает, что функция возвращает объект Invoice в виде Promise (c асинхронного потока)
      return this.warehouseRepository.findOne({
        //получаем объект Invoice по id
        where: { Id }, //указываем условие поиска по id
      });
    }
  
      async findAll(): Promise<Warehouse[]> {
        const warehouses = await this.warehouseRepository.find(); //получаем массив Invoice из БД
        return warehouses; //возвращаем массив Invoice
      }

      async update(Id: number, updateWarehouse: Warehouse) {
        //получаем объект Invoice для обновления по id
        const warehouse = await this.warehouseRepository.findOne({ where: { Id } }); //получаем объект Invoice по id из БД
     warehouse.WareName = updateWarehouse.WareName; //заполняем поля объекта Invoice
     warehouse.WareAddress = updateWarehouse.WareAddress;
        await this.warehouseRepository.save(warehouse); //сохраняем объект Invoice в БД
        return warehouse; //возвращаем объект Invoice
      }
    
      remove(Id: number) {
        this.warehouseRepository.delete({ Id }); //удаляем объект Author из БД
      }
    
}
