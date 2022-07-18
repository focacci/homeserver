import { Controller, Delete, Get, Param, Post, Query } from '@nestjs/common';
import { GroceryService } from './grocery.service';
import { GroceryItem } from './entities/grocery-item.entity';
import { DeleteResult } from 'typeorm';

@Controller('grocery')
export class GroceryController {
    constructor(private readonly groceryService: GroceryService) {}

    @Get()
    async getList(): Promise<GroceryItem[]> {
        return await this.groceryService.getAllItems();
    }

    @Post('item')
    async addToList(@Query() query): Promise<GroceryItem> {
        return await this.groceryService.addItem(query.name);
    }

    @Delete('item')
    async removeFromList(@Query() query): Promise<DeleteResult> {
        return await this.groceryService.removeItem(query.name);
    }
}
