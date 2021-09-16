import { TenantService } from './../tenant/tenant/tenant.service';
import { TenantGuard } from './../tenant/tenant.guard';
import { Controller, Get, Post, Body, UseGuards, ConsoleLogger, Req } from '@nestjs/common';

import { JwtAuthGuard } from '../auth/jwt-auth.guard'
import { TransactionsService } from './transactions.service';
import { CreateTransactionDto } from './dto/create-transaction.dto';

@UseGuards(JwtAuthGuard, TenantGuard)
@Controller('transactions')
export class TransactionsController {
  constructor(
    private readonly transactionsService: TransactionsService, 
    private tenantService: TenantService) {}

  @Post()
  create(@Body() createTransactionDto: CreateTransactionDto) {
    return this.transactionsService.create(createTransactionDto);
  }

  @Get()
  findAll(@Req() req ) {
    console.log(this.tenantService.tenant, req.user)
    return this.transactionsService.findAll();
  }
}
