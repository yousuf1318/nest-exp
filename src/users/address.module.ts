import { Module } from '@nestjs/common';
import { addressService } from './address.service';
import { addressController } from './address.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { address, addressSchema } from '../schemas/address.schema';

@Module({
  providers: [addressService],
  controllers: [addressController],
  imports: [
    MongooseModule.forFeature([{ name: address.name, schema: addressSchema }]),
  ],
})
export class addressModule {}