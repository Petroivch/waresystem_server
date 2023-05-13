import { HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Productlist } from "src/entities/productlist.entity";
import { DataSource, In, Repository } from "typeorm";


@Injectable()
export class ProductlistService {
    
  constructor(
    @InjectRepository(Productlist)
    private readonly productlistRepository: Repository<Productlist>,
  ) {}
  
    async findAll(): Promise<Productlist[]> {
      const pr = await this.productlistRepository.find();
      return pr;
    }
    findOne(Id: number): Promise<Productlist> {
      return this.productlistRepository.findOne({
        where: { Id },
      });
    }
  
}
