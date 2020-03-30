import { Document } from 'mongoose';
export interface IbaseModel extends Document {
    _id: string;
    createdAt: string;
    updatedAt: string;
}
