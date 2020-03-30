import { Response } from 'express';
import { JwtService } from '@nestjs/jwt';
import { UserService } from './service/user.service';
import { LoginUserDto } from '../shared/dto/loginUser.dto';
import { AuthService } from './service/auth.service';
import { CreateUserDto } from '../shared/dto/create/ createUser.dto';
import { User } from '../graphql';
export declare class AuthResolver {
    private readonly jwt;
    private readonly userService;
    private readonly authService;
    constructor(jwt: JwtService, userService: UserService, authService: AuthService);
    users(): Promise<import("../shared/interfaces/ibaseModel").IbaseModel[]>;
    login(loginInput: LoginUserDto, res: Response): Promise<import("../models").Iuser>;
    signup(createUserDto: CreateUserDto, res: Response): Promise<import("../models").Iuser>;
    me(user: User): Promise<User>;
}
