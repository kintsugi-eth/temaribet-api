import { IbaseModel } from '../../../shared/interfaces/ibaseModel';
export interface ICategory extends IbaseModel {
    name: string;
    slug: string;
    icon: string;
    isActive: boolean;
    parent: string;
}
export interface ICourseLevel extends IbaseModel {
    name: string;
}
export interface ILanguage extends IbaseModel {
    name: string;
}
export interface IContentType extends IbaseModel {
    name: string;
}
export interface IInstructor extends IbaseModel {
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
export interface IStudent extends IbaseModel {
    user: string;
    profileImage: string;
    contactEmail: string;
    dob: string;
    numOfCoursesEnrolled: number;
    numOfCourseCompleted: number;
}
export interface ICourse extends IbaseModel {
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
export interface ICourseChapter extends IbaseModel {
    course: string;
    title: string;
    order: number;
    numOfReading: number;
    numOfVideo: number;
    numOfAssignment: number;
}
export interface ICourseChapterContent extends IbaseModel {
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
export interface IFile extends IbaseModel {
    path: string;
    filename: string;
    mimetype: string;
    uploader: string;
}
export interface IFeedback extends IbaseModel {
    enrollment: string;
    ratingScore: string;
    feedbackText: string;
}
export interface IEnrollment extends IbaseModel {
    student: string;
    course: string;
    isPaidSubscription: string;
}
export interface ILearningProgress extends IbaseModel {
    enrollment: string;
    courseChapterContent: string;
    beginTimestamp: string;
    completionTimestamp: string;
    status: boolean;
}
export interface IRole extends IbaseModel {
    name: string;
    description: string;
}
export interface IUser extends IbaseModel {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    role: string;
    isActive: string;
    remember_token: string;
}
export interface IWishList extends IbaseModel {
    course: string;
    user: string;
}
