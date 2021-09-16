import { TenantService } from './../tenant/tenant/tenant.service';
import { Transaction } from './entities/transaction.entity';
import { Injectable } from '@nestjs/common';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { InjectModel } from '@nestjs/sequelize';


@Injectable()
export class TransactionsService {

  constructor(
     @InjectModel(Transaction)private TransactionModel: typeof Transaction,
     private tenantService: TenantService,
     ){

  }

  create(createTransactionDto: CreateTransactionDto) {
    return this.TransactionModel.create({
      ...createTransactionDto,
      account_id: this.tenantService.tenant.id,
    });
  }

  findAll() {
    return this.TransactionModel.findAll(
      {
        where: {
          account_id: this.tenantService.tenant.id,
        }
      }
    );
  }

}
