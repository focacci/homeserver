import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DeleteResult } from 'typeorm';
import { GroceryItem } from './entities/grocery-item.entity';

@Injectable()
export class GroceryService {
    constructor(
        @InjectRepository(GroceryItem)
        private groceryItemRepository: Repository<GroceryItem>,
    ) {}

    // Returns list of all grocery items
    async getAllItems(): Promise<GroceryItem[]> {
        return await this.groceryItemRepository.find();
    }

    // Adds a grocery item to the database
    async addItem(name: string): Promise<GroceryItem> {
        const newItem = await this.groceryItemRepository.create({
            name: name,
        });
        try {
            return await this.groceryItemRepository.save(newItem);
        }
        catch (error) {
            return error.driverError.sqlMessage;
        }
    }

    // Removes item from the database if it exists
    async removeItem(name: string): Promise<DeleteResult> {
        return await this.groceryItemRepository
            .createQueryBuilder()
            .delete()
            .from(GroceryItem)
            .where('name = :name', { name: name })
            .execute();
    }

}
