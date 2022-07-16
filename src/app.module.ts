import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GroceryModule } from './grocery/grocery.module';

@Module({
  imports: [GroceryModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
