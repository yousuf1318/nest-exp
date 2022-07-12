import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './users/users.module';
import { addressModule } from './users/address.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://yousuf:yousuf456@cluster0.poozg.mongodb.net/?retryWrites=true&w=majority'), UserModule,addressModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }

