import { Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import { ProductlistService } from 'src/services/productlist.service';


@Controller('productlist')
export class ProductlistController {
    constructor(private readonly productlistservice: ProductlistService) {}
    @Get()
    findAll() {
        return this.productlistservice.findAll();
    }
    @Get(':id')
    findOne(@Param('id') id: string) {
      return this.productlistservice.findOne(+id);
    }
}