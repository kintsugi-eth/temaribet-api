import { JwtPayload } from '../jwt-payload.interface';
import { ConfigService } from '../../../config/config.service';
import { IbaseModel } from '../../../shared/interfaces/ibaseModel';
import { CreateUserDto } from '../../../shared/dto/create/ createUser.dto';
import { IUser, UserService } from '../../database';
export declare class AuthService {
    private readonly usersService;
    private readonly configService;
    constructor(usersService: UserService, configService: ConfigService);
    register(user: CreateUserDto): Promise<IbaseModel>;
    createToken(user: any): {
        expiresIn: number;
        accessToken: string;
    };
    validateUser(payload: JwtPayload): Promise<any>;
    authenticate(user: IUser): Promise<any>;
}
