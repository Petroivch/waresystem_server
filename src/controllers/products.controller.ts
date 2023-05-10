import { ProductsService } from '../services/products.service';
import { Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import { Product } from '../entities/product.entity';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Продукты') 
@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}
  @Get()
  findAll() {
    return this.productsService.findAll();
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productsService.findOne(+id);
  }
  @Put(':id')
  update(@Param('id') id: string, @Body() updateProduct: Product) {
    return this.productsService.update(+id, updateProduct);
  }
  @ApiOperation({ summary: 'Создание продукта' })
  @Post()
  create(@Body() createProduct: Product) {
    return this.productsService.create(createProduct);
  }
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productsService.remove(+id);
  }

}