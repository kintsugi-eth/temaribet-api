import { IbaseModel } from './ibaseModel';
import { BaseArg } from '../args/base.arg';
export interface IbaseService {
    findAll(args?: BaseArg): Promise<IbaseModel[]>;
    findOne(id: any): Promise<IbaseModel>;
    createOne(body: any): Promise<IbaseModel>;
    updateOne(id: any, newData: any): Promise<IbaseModel>;
    deleteOne(id: any): Promise<any>;
}
