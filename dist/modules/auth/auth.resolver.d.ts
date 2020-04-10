import { Response } from 'express';
import { JwtService } from '@nestjs/jwt';
import { LoginUserDto } from '../../shared/dto/loginUser.dto';
import { UserService } from '../database';
import { AuthService } from './service/auth.service';
import { CreateUserDto } from '../../shared/dto/create/ createUser.dto';
import { User } from '../core/graphql/types';
export declare class AuthResolver {
    private readonly jwt;
    private readonly userService;
    private readonly authService;
    constructor(jwt: JwtService, userService: UserService, authService: AuthService);
    users(): Promise<import("../../shared/interfaces/ibaseModel").IbaseModel[]>;
    login(loginInput: LoginUserDto, res: Response): Promise<import("../database").IUser>;
    signup(createUserDto: CreateUserDto, res: Response): Promise<import("../database").IUser>;
    me(user: User): Promise<User>;
}
