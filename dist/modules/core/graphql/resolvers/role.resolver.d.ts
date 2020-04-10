import { RoleService } from '../../../database';
import { RoleDto } from '../DTO/dtos';
export declare class RoleResolver {
    private readonly roleService;
    constructor(roleService: RoleService);
    roles(): Promise<import("../../../../shared/interfaces/ibaseModel").IbaseModel[]>;
    role(id: string): Promise<import("../../../../shared/interfaces/ibaseModel").IbaseModel>;
    createRole(roleInput: RoleDto): Promise<import("../../../../shared/interfaces/ibaseModel").IbaseModel>;
    updateRole(id: string, roleInput: RoleDto): Promise<import("../../../../shared/interfaces/ibaseModel").IbaseModel>;
    deleteRole(id: string): Promise<any>;
}
