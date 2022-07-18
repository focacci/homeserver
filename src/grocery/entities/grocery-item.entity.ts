import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { GroceryList } from './grocery-list.entity';

@Entity()
export class GroceryItem {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true, nullable: false })
  name: string;
}