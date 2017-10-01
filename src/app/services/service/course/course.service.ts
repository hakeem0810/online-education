import { Injectable } from '@angular/core';

@Injectable()
export class CourseService {

  constructor() {
    console.log('CourseService constructor......');
  }

  /**
   * 根据课程编号读取课程
   * @param {number} id 课程编号
   * @returns {Course}  课程实体
   */
  readCourse(id: number): Course {
    console.log('Read Course......');
    return null;
  }

  /**
   * 根据参数条件读取课程
   * @param {Array<Params>} params  参数列表
   * @returns {Array<Course>}  课程列表
   */
  readCourses(params: Array<Params> ): Array<Course>{
    console.log('Read Courses......');
    return [];
  }

  /**
   * 根据课程编号获取章实体
   * @param courseId  课程编号
   * @returns {Array<Chapter>}  章列表
   */
  readChapters(courseId): Array<Chapter> {
    console.log('Read Chapters' + courseId + '......' );
    return [];
  }

  /**
   * 根据章编号获取节实体
   * @param chapterId 章编号
   * @returns {Array<Lesson>} 节列表
   */
  readLessons(chapterId): Array<Lesson> {
    console.log('Read Lessons' + chapterId + '......' );
    return [];
  }
}


export class Course {
  public courseId: number;
  public courseName: string;
  public courseGrade: string;
  public courseLevel: number;
  public subject: string;
  public thumbnail: string;
  public description: string;
}


export class Chapter {
  public chapterId: number;
  public name: string;
  public courseId: number;
  public description: string;
}

export class Lesson {
  public lessonId: number;
  public name: string;
  public chapterId: number;
  public description: string;
}

export class Params {
  public key: string ;
  public value: string;
}
