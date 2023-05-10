import { InvoicesService } from '../services/invoices.service';
import { Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import { Invoice } from '../entities/invoice.entity';


@Controller('invoices')
export class InvoicesController {
  constructor(private readonly invoicesService: InvoicesService) {}
  @Get()
  findAll() {
    return this.invoicesService.findAll();
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.invoicesService.findOne(+id);
  }
  @Put(':id')
  update(@Param('id') id: string, @Body() updateInvoice: Invoice) {
    return this.invoicesService.update(+id, updateInvoice);
  }
  @Post()
  create(@Body() createInvoice: Invoice) {
    return this.invoicesService.create(createInvoice);
  }
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.invoicesService.remove(+id);
  }

}