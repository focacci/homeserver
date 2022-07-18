import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GroceryModule } from './grocery/grocery.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GroceryItem } from './grocery/entities/grocery-item.entity';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      entities: [GroceryItem],
      synchronize: true // not for prod
    }),
    GroceryModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
