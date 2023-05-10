import { HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DatasourceService } from "src/datasource/datasource.service";
import { CreateProductDto } from "src/dto/ProductDTO";
import { Invoice } from "src/entities/invoice.entity";
import { Warehouse } from "src/entities/warehouse.entity";
import { Repository, In } from "typeorm";
import { Product } from "../entities/product.entity";

@Injectable()
export class ProductsService {
  constructor(
    private readonly datasourceService: DatasourceService,
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>, // "внедряем" репозиторий product в сервис
    @InjectRepository(Warehouse)
    private readonly warehouseRepository: Repository<Warehouse>, // "внедряем" репозиторий warehouse в сервис
  ) {}

    async create(productDto: CreateProductDto): Promise<Product>
    {
       //получаем объект CreateInvoiceDto
       const product = this.productRepository.create(); //создаем объект Invoice из репозитория
       product.ProductName = productDto.ProductName; //заполняем поля объекта Invoice
       product.ProductType = productDto.ProductType;
       product.Cost = productDto.Cost;
       await this.productRepository.save(product); //сохраняем объект Invoice в БД
       return product; //возвращаем объект Invoice
      }
      findOne(Id: number): Promise<Product> {
        // Promise<Invoice> - указывает, что функция возвращает объект Invoice в виде Promise (c асинхронного потока)
        return this.productRepository.findOne({
          //получаем объект Invoice по id
          where: { Id }, //указываем условие поиска по id
        });
      }
      async findAll(): Promise<Product[]> {
        const products = await this.productRepository.find(); //получаем массив Invoice из БД
        return products; //возвращаем массив Invoice
      }
      
      async update(Id: number, updatedProduct: Product) {
        //получаем объект Invoice для обновления по id
     const product = await this.productRepository.findOne({ where: { Id } }); //получаем объект Invoice по id из БД
     product.ProductName = updatedProduct.ProductName; //заполняем поля объекта Invoice
     product.ProductType = updatedProduct.ProductType;
     product.Cost = updatedProduct.Cost;
        await this.productRepository.save(product); //сохраняем объект Invoice в БД
        return product; //возвращаем объект Invoice
      }

      remove(Id: number) {
        this.productRepository.delete({ Id }); //удаляем объект Author из БД
      }
}
