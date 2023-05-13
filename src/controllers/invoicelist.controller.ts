import { Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import { InvoicelistService } from 'src/services/invoicelist.service';


@Controller('invoicelist')
export class InvoiceListController {
    constructor(private readonly invoicelistservice: InvoicelistService) {}
    @Get()
    findAll() {
        return this.invoicelistservice.findAll();
    }
}