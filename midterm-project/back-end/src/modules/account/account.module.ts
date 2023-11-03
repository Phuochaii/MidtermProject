import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Account } from './account.entity';
import { AccountService } from './account.service';
import { AccountRepository } from './account.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Account])],
  controllers: [],
  providers: [AccountService, AccountRepository],
  exports: [AccountService],
})
export class AccountModule {}
