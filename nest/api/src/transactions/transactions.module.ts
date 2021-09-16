import { SequelizeModule } from '@nestjs/sequelize';
import { Module } from '@nestjs/common';

import { TransactionsService } from './transactions.service';
import { TransactionsController } from './transactions.controller';
import { Account } from './../accounts/entities/account.entity';
import { Transaction } from './entities/transaction.entity';
import { AuthModule } from 'src/auth/auth.module';


@Module({
  imports:[AuthModule ,SequelizeModule.forFeature([Transaction, Account])],
  controllers: [TransactionsController],
  providers: [TransactionsService]
})
export class TransactionsModule {}
