import { Model } from 'mongoose';
import { CreateUserDto } from '../../shared/dto/create/ createUser.dto';
import { Iuser } from '../../models/interfaces';
import { BaseService } from '../../shared/base.service';
export declare class UserService extends BaseService {
    private readonly userModel;
    constructor(userModel: Model<Iuser>);
    findByUsername(username: string): Promise<Iuser>;
    create(createUserDto: CreateUserDto): Promise<Iuser>;
}
