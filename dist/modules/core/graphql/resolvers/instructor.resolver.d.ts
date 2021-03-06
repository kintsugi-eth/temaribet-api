import { IInstructor, InstructorService, UserService } from '../../../database';
import { InstructorDto } from '../DTO/dtos';
export declare class InstructorResolver {
    private readonly instructorService;
    private readonly userService;
    constructor(instructorService: InstructorService, userService: UserService);
    instructors(): Promise<import("../../../../shared/interfaces/ibaseModel").IbaseModel[]>;
    instructor(id: string): Promise<import("../../../../shared/interfaces/ibaseModel").IbaseModel>;
    createInstructor(instructor: InstructorDto): Promise<import("../../../../shared/interfaces/ibaseModel").IbaseModel>;
    updateInstructor(id: string, instructor: InstructorDto): Promise<import("../../../../shared/interfaces/ibaseModel").IbaseModel>;
    deleteInstructor(id: string): Promise<any>;
    user(instructor: IInstructor): Promise<import("../../../../shared/interfaces/ibaseModel").IbaseModel>;
}
