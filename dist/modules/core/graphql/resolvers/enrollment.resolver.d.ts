import { EnrollmentService } from '../../../database';
import { EnrollmentDto } from '../DTO/dtos';
export declare class EnrollmentResolver {
    private readonly enrollmentService;
    constructor(enrollmentService: EnrollmentService);
    enrollments(): Promise<import("../../../../shared/interfaces/ibaseModel").IbaseModel[]>;
    enrollment(id: string): Promise<import("../../../../shared/interfaces/ibaseModel").IbaseModel>;
    createEnrollment(enrollmentInput: EnrollmentDto): Promise<import("../../../../shared/interfaces/ibaseModel").IbaseModel>;
    updateEnrollment(id: string, enrollmentInput: EnrollmentDto): Promise<import("../../../../shared/interfaces/ibaseModel").IbaseModel>;
    deleteEnrollment(id: string): Promise<any>;
}
