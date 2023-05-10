import { HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DatasourceService } from "src/datasource/datasource.service";
import { CreateInvoiceDto } from "src/dto/InvoiceDTO";
import { Product } from "src/entities/product.entity";
import { Warehouse } from "src/entities/warehouse.entity";
import { In, Repository } from "typeorm";
import { Invoice } from "../entities/invoice.entity";
import { Client } from "src/entities/client.entity";

@Injectable()
export class InvoicesService {
  constructor(
    private readonly datasourceService: DatasourceService,
    @InjectRepository(Invoice)
    private readonly invoiceRepository: Repository<Invoice>, // "внедряем" репозиторий Invoice в сервис
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>, // "внедряем" репозиторий Affiliation в сервис
    @InjectRepository(Client)
    private readonly clientRepository: Repository<Client>,
    @InjectRepository(Warehouse)
    private readonly warehouseRepository: Repository<Warehouse>, // "внедряем" репозиторий Artilcle в сервис
  ) {}

  async create(invoiceDto: CreateInvoiceDto): Promise<Invoice>
  {
     //получаем объект CreateInvoiceDto
     const invoice = this.invoiceRepository.create(); //создаем объект Invoice из репозитория
     invoice.Date = invoiceDto.Date; //заполняем поля объекта Invoice
     invoice.UserId = invoiceDto.UserId;
     invoice.WareId = invoiceDto.WareId;
     invoice.ProductId = invoiceDto.ProductId;
     invoice.ProductCount = invoiceDto.ProductCount;
     invoice.TypeOfOrder = invoiceDto.TypeOfOrder;
     const warehouses = await this.warehouseRepository.findBy({
       //получаем массив Affiliation по id
       Id: In(invoiceDto.warehouses),
     });
     invoice.warehouses = warehouses;

     const clients = await this.clientRepository.findBy({
      //получаем массив Affiliation по id
      Id: In(invoiceDto.clients),
    });
    invoice.clients = clients;

    const products = await this.productRepository.findBy({
      //получаем массив Affiliation по id
      Id: In(invoiceDto.products),
    });
    invoice.products = products;

     await this.invoiceRepository.save(invoice); //сохраняем объект Invoice в БД
     return invoice; //возвращаем объект Invoice
    }
 
    findOne(Id: number): Promise<Invoice> {
      // Promise<Invoice> - указывает, что функция возвращает объект Invoice в виде Promise (c асинхронного потока)
      return this.invoiceRepository.findOne({
        //получаем объект Invoice по id
        where: { Id }, //указываем условие поиска по id
        relations: { warehouses: true, products: true }, //получаем связанные объекты
      });
    }
  
      async findAll(): Promise<Invoice[]> {
        const invoices = await this.invoiceRepository.find({
          //получаем связанные объекты
          relations: {
            warehouses: true,
            products: true,
          },
        }); //получаем массив Invoice из БД
        return invoices; //возвращаем массив Invoice
      }
    
      async update(Id: number, updatedInvoice: Invoice) {
        //получаем объект Invoice для обновления по id
        const invoice = await this.invoiceRepository.findOne({ where: { Id } }); //получаем объект Invoice по id из БД
        invoice.Date = updatedInvoice.Date; //заполняем поля объекта Invoice
     invoice.WareId = updatedInvoice.WareId;
     invoice.ProductId = updatedInvoice.ProductId;
     invoice.ProductCount = updatedInvoice.ProductCount;
     invoice.TypeOfOrder = updatedInvoice.TypeOfOrder;
        await this.invoiceRepository.save(invoice); //сохраняем объект Invoice в БД
        return invoice; //возвращаем объект Invoice
      }
    
      remove(Id: number) {
        this.invoiceRepository.delete({ Id }); //удаляем объект Author из БД
      }
    
      
}
