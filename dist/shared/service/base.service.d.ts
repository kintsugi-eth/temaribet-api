import { IbaseService } from '../interfaces/ibaseService';
import { Model } from 'mongoose';
import { IbaseModel } from '../interfaces/ibaseModel';
import { BaseArg } from '../args/base.arg';
export declare class BaseService implements IbaseService {
    private readonly model;
    constructor(model: Model<IbaseModel>);
    createOne(body: any): Promise<IbaseModel>;
    deleteOne(id: any): Promise<any>;
    findAll(args?: BaseArg): Promise<IbaseModel[]>;
    findOne(id: any): Promise<IbaseModel>;
    updateOne(id: any, newData: any): Promise<IbaseModel>;
}
