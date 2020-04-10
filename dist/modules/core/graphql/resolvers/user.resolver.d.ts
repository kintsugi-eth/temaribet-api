import { UserService } from '../../../database';
import { UserDto } from '../DTO/dtos';
export declare class UserResolver {
    private readonly userService;
    constructor(userService: UserService);
    users(): Promise<import("../../../../shared/interfaces/ibaseModel").IbaseModel[]>;
    user(id: string): Promise<import("../../../../shared/interfaces/ibaseModel").IbaseModel[]>;
    createUser(userInput: UserDto): Promise<import("../../../../shared/interfaces/ibaseModel").IbaseModel>;
    updateUser(id: string, updateInput: UserDto): Promise<import("../../../../shared/interfaces/ibaseModel").IbaseModel>;
    deleteUser(id: string): Promise<any>;
}
