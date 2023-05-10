import { WarehousesService } from '../services/warehouses.service';
import { Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import { Warehouse } from '../entities/warehouse.entity';
import { ApiTags } from '@nestjs/swagger';


@Controller('warehouses')
export class WarehousesController {
  constructor(private readonly warehousesService: WarehousesService) {}
  @Get()
  findAll() {
    return this.warehousesService.findAll();
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.warehousesService.findOne(+id);
  }
  @Put(':id')
  update(@Param('id') id: string, @Body() updateWarehouse: Warehouse) {
    return this.warehousesService.update(+id, updateWarehouse);
  }
  @Post()
  create(@Body() createWarehouse: Warehouse) {
    return this.warehousesService.create(createWarehouse);
  }
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.warehousesService.remove(+id);
  }

}