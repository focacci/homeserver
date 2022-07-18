import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GroceryModule } from './grocery/grocery.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GroceryItem } from './grocery/entities/grocery-item.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'michaelfocacci',
      password: 'tunafish',
      database: 'homeserver',
      entities: [GroceryItem],
      synchronize: true // not for prod
    }),
    GroceryModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
