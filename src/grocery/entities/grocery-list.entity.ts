import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { GroceryItem } from './grocery-item.entity';

@Entity()
export class GroceryList {
  @PrimaryGeneratedColumn()
  id: number;
}