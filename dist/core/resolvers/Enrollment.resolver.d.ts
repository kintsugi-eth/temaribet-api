import { EnrollmentService } from '../services/services';
import { EnrollementDto } from '../../graphql/dto/entrollment and progress/enrollement.dto';
export declare class EnrollmentResolver {
    private readonly enrollmentService;
    constructor(enrollmentService: EnrollmentService);
    enrollments(): Promise<import("../../shared/interfaces/ibaseModel").IbaseModel[]>;
    enrollment(id: string): Promise<import("../../shared/interfaces/ibaseModel").IbaseModel>;
    createEnrollment(enrollmentInput: EnrollementDto): Promise<import("../../shared/interfaces/ibaseModel").IbaseModel>;
    updateEnrollment(id: string, enrollmentInput: EnrollementDto): Promise<import("../../shared/interfaces/ibaseModel").IbaseModel>;
    deleteEnrollment(id: string): Promise<any>;
}
