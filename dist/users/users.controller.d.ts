import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserService } from './users.service';
export declare class UserController {
    private readonly service;
    constructor(service: UserService);
    index(): Promise<import("../schemas/users.schema").User[]>;
    find(id: string): Promise<import("../schemas/users.schema").User>;
    create(createUserDto: CreateUserDto): Promise<import("../schemas/users.schema").User>;
    update(id: string, updateUserDto: UpdateUserDto): Promise<import("../schemas/users.schema").User>;
    delete(id: string): Promise<import("../schemas/users.schema").User>;
}
