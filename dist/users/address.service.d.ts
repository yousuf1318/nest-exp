import { Model } from 'mongoose';
import { AddressDto } from './dto/address.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { address, addressDocument } from '../schemas/address.schema';
export declare class addressService {
    private readonly model;
    constructor(model: Model<addressDocument>);
    findAll(): Promise<address[]>;
    findOne(id: string): Promise<address>;
    create(AddressDto: AddressDto): Promise<address>;
    update(id: string, updateUserDto: UpdateUserDto): Promise<address>;
    delete(id: string): Promise<address>;
}
