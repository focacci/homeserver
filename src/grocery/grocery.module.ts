import { Module } from '@nestjs/common';
import { GroceryService } from './grocery.service';
import { GroceryController } from './grocery.controller';

@Module({
  providers: [GroceryService],
  controllers: [GroceryController]
})
export class GroceryModule {}