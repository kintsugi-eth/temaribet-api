export declare class CategoryDto {
    name: string;
    slug: string;
    icon: string;
    isActive: boolean;
    parent: string;
}
export declare class ContentTypeDto {
    name: string;
}
export declare class CourseDto {
    instructor: string;
    category: string;
    courseLevel: string;
    courseTitle: string;
    courseSlug: string;
    keywords: string[];
    overview: string;
    courseImage: string;
    language: string;
    duration: string;
    price: number;
    rate: number;
    rateCount: number;
    strikeOutPrice: number;
    isActive: boolean;
}
export declare class CourseChapterDto {
    course: string;
    title: string;
    order: number;
    numOfReading: number;
    numOfVideo: number;
    numOfAssignment: number;
}
export declare class CourseChapterContentDto {
    order: number;
    description: string;
    title: string;
    courseChapter: string;
    contentType: string;
    isMandatory: boolean;
    timeRequiredInSec: number;
    isOpenForFree: boolean;
    duration: number;
}
export declare class CourseLevelDto {
    name: string;
}
export declare class EnrollmentDto {
    enrollment: string;
    courseChapterContent: string;
    beginTimestamp: string;
    completionTimestamp: string;
    status: boolean;
}
export declare class FeedbackDto {
    student: string;
    course: string;
    isPaidSubscription: string;
}
export declare class FileDto {
    path: string;
    filename: string;
    mimetype: string;
    uploader: string;
}
export declare class InstructorDto {
    user: string;
    instructorSlug: string;
    contactEmail: string;
    mobile: string;
    linkFacebook: string;
    linkLinkedin: string;
    linkTwitter: string;
    qualification: string;
    introductionBrief: string;
    profileImage: string;
    numOfPublishedCourses: number;
    numOfEnrolledStudents: number;
    averageReviewRating: number;
    numOfReview: number;
}
export declare class LanguageDto {
    name: string;
}
export declare class LearningProgressDto {
    enrollment: string;
    courseChapterContent: string;
    beginTimestamp: string;
    completionTimestamp: string;
    status: boolean;
}
export declare class RoleDto {
    name: string;
    description: string;
}
export declare class StudentDto {
    user: string;
    profileImage: string;
    contactEmail: string;
    dob: string;
    numOfCoursesEnrolled: number;
    numOfCourseCompleted: number;
}
export declare class UserDto {
    firstName: string;
    lastName: string;
    email: string;
    role: string;
    isActive: string;
}
