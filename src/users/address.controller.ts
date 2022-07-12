
import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
  } from '@nestjs/common';
  import { AddressDto } from './dto/address.dto';
  import { UpdateUserDto } from './dto/update-user.dto';
  import { addressService } from './address.service';
  
  @Controller('Address')
  export class addressController {
    constructor(private readonly service: addressService) {}
  
    @Get()
    async index() {
      return await this.service.findAll();
    }
  
    @Get(':id')
    async find(@Param('id') id: string) {
      return await this.service.findOne(id);
    }
  
    @Post()
    async create(@Body() addressDto: AddressDto) {
      console.log({ addressDto });
      return await this.service.create(addressDto);
    }
  
    @Put(':id')
    async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
      return await this.service.update(id, updateUserDto);
    }
  
    @Delete(':id')
    async delete(@Param('id') id: string) {
      return await this.service.delete(id);
    }
  }