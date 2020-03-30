import { IbaseModel } from '../../shared/interfaces/ibaseModel';
export interface Iuser extends IbaseModel {
    readonly firstName: string;
    readonly lastName: string;
    readonly username: string;
    readonly password: string;
    readonly role: string;
    readonly refresh?: string;
}
