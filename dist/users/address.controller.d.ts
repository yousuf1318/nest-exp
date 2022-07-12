import { AddressDto } from './dto/address.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { addressService } from './address.service';
export declare class addressController {
    private readonly service;
    constructor(service: addressService);
    index(): Promise<import("../schemas/address.schema").address[]>;
    find(id: string): Promise<import("../schemas/address.schema").address>;
    create(addressDto: AddressDto): Promise<import("../schemas/address.schema").address>;
    update(id: string, updateUserDto: UpdateUserDto): Promise<import("../schemas/address.schema").address>;
    delete(id: string): Promise<import("../schemas/address.schema").address>;
}
