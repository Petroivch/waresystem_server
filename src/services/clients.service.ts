import { HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DatasourceService } from "src/datasource/datasource.service";
import { IncompleteUserDto } from "src/dto/incomplete-client.dto";
import { CreateClientDto } from "src/dto/ClientDTO";
import { Invoice } from "src/entities/invoice.entity";
import { Product } from "src/entities/product.entity";
import { Repository } from "typeorm";
import { Client } from "../entities/client.entity";

@Injectable()
export class ClientsService {

  constructor(
    private readonly datasourceService: DatasourceService,
    @InjectRepository(Client)
    private readonly clientRepository: Repository<Client>, // "внедряем" репозиторий Artilcle в сервис
  ) {}

  async create(clientDto: CreateClientDto): Promise<Client>{
      const client = this.clientRepository.create(); //создаем объект Author из репозитория
      client.UserName = clientDto.UserName; //заполняем поля объекта Author
      client.UserAddress = clientDto.UserAddress;

      await this.clientRepository.save(client); //сохраняем объект Author в БД
      return client; //возвращаем объект Author
  
      }
      async findIncomplete(): Promise<IncompleteUserDto[]> {
        const users = await this.clientRepository.find(); //получаем массив Client из БД
        const incompleteUsers: IncompleteUserDto[] = users.map((client) => {
          //преобразуем массив Client в массив IncompleteUserDto
          const incompleteUser = new IncompleteUserDto();
          incompleteUser.Id = client.Id;
          incompleteUser.UserName = client.UserName;
          return incompleteUser;
        });
        return incompleteUsers; //возвращаем массив IncompleteUserDto
      }
    
      findOne(Id: number): Promise<Client> {
        return this.clientRepository.findOne({
          where: { Id }, //указываем условие поиска по id
        });
      }
    
      async findAll(): Promise<Client[]> {
        const users = await this.clientRepository.find();
        return users;
      }
    
      async update(Id: number, updatedClient: Client) {
        //получаем объект Author для обновления по id
        const client = await this.clientRepository.findOne({ where: { Id } }); //получаем объект Author по id из БД
        client.UserName = updatedClient.UserName; //обновляем поля объекта Author
        client.UserAddress = updatedClient.UserAddress;
        await this.clientRepository.save(client); //сохраняем объект Author в БД
        return client; //возвращаем объект Author
      }
    
      remove(Id: number) {
        this.clientRepository.delete({ Id }); //удаляем объект Author из БД
      }
    
      
}
