import { EmailScalar } from '../../../shared/scalars/email.scalar';
export declare class Category {
    name: string;
    slug: string;
    icon: string;
    isActive: boolean;
    parent: string;
}
export declare class CourseLevel {
    name: string;
}
export declare class Language {
    name: string;
}
export declare class ContentType {
    name: string;
}
export declare class User {
    firstName: string;
    lastName: string;
    email: EmailScalar;
    role: string;
    isActive: string;
}
export declare class Instructor {
    user: User;
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
export declare class Student {
    user: string;
    profileImage: string;
    contactEmail: string;
    dob: string;
    numOfCoursesEnrolled: number;
    numOfCourseCompleted: number;
}
export declare class Course {
    instructor: Instructor;
    category: Category;
    courseLevel: CourseLevel;
    courseTitle: string;
    courseSlug: string;
    keywords: string[];
    overview: string;
    courseImage: string;
    language: Language;
    duration: string;
    price: number;
    rate: number;
    rateCount: number;
    strikeOutPrice: number;
    isActive: boolean;
}
export declare class CourseChapter {
    course: string;
    title: string;
    order: number;
    numOfReading: number;
    numOfVideo: number;
    numOfAssignment: number;
}
export declare class CourseChapterContent {
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
export declare class File {
    path: string;
    filename: string;
    mimetype: string;
    uploader: string;
}
export declare class Feedback {
    student: string;
    course: string;
    isPaidSubscription: string;
}
export declare class Enrollment {
    enrollment: string;
    courseChapterContent: string;
    beginTimestamp: string;
    completionTimestamp: string;
    status: boolean;
}
export declare class LearningProgress {
    enrollment: string;
    courseChapterContent: string;
    beginTimestamp: string;
    completionTimestamp: string;
    status: boolean;
}
export declare class Role {
    name: string;
    description: string;
}
export declare class WishList {
    course: string;
    user: string;
}
export declare class Deleted {
    n: number;
    ok: number;
    deletedCount: number;
}
