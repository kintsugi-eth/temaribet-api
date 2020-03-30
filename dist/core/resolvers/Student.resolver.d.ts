import { StudentService } from '../services/services';
import { UserService } from '../../auth';
import { IStudent } from '../../models/interfaces/IStudent';
import { StudentDto } from '../../graphql/dto/actors/student.dto';
export declare class StudentResolver {
    private readonly studentService;
    private readonly userService;
    constructor(studentService: StudentService, userService: UserService);
    students(): Promise<import("../../shared/interfaces/ibaseModel").IbaseModel[]>;
    student(id: string): Promise<import("../../shared/interfaces/ibaseModel").IbaseModel>;
    createStudent(studentInput: StudentDto): Promise<import("../../shared/interfaces/ibaseModel").IbaseModel>;
    updateStudent(id: string, studentInput: StudentDto): Promise<import("../../shared/interfaces/ibaseModel").IbaseModel>;
    deleteStudent(id: string): Promise<any>;
    user(student: IStudent): Promise<import("../../shared/interfaces/ibaseModel").IbaseModel>;
}
