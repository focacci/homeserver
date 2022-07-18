import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GroceryService } from './grocery.service';
import { GroceryController } from './grocery.controller';
import { GroceryList } from './entities/grocery-list.entity';
import { GroceryItem } from './entities/grocery-item.entity';

@Module({
  imports: [TypeOrmModule.forFeature([GroceryItem])],
  providers: [GroceryService],
  controllers: [GroceryController]
})
export class GroceryModule {}
