import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AddressDto } from './dto/address.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { address, addressDocument } from '../schemas/address.schema';

@Injectable()
export class addressService {
  constructor(
    @InjectModel(address.name) private readonly model: Model<addressDocument>,
  ) {}

  async findAll(): Promise<address[]> {
    return await this.model.find().exec();
  }

  async findOne(id: string): Promise<address> {
    return await this.model.findById(id).exec();
  }

  async create(AddressDto: AddressDto): Promise<address> {
    return await new this.model({
      ...AddressDto,
      createdAt: new Date(),
    }).save();
  }



  async update(id: string, updateUserDto: UpdateUserDto): Promise<address> {
    return await this.model.findByIdAndUpdate(id, updateUserDto).exec();
  }

  async delete(id: string): Promise<address> {
    return await this.model.findByIdAndDelete(id).exec();
  }
}