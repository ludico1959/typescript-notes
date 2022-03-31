/**
 * name - string
 * duration - number
 * educator - string
 */

interface Course {
  name: string;
  duration?: number; // ? means optinal attribute
  educator: string;
}

// Not use interface
// class CreateCourseService {
//   execute(name: string, duration: number, educator: string) {
//     console.log(name, duration, educator);
//   }
// }

// Use interface without destructuring
// class CreateCourseService {
//   execute(data: Course) {
//     console.log(data.name, data.duration, data.educator);
//   }
// }

// Use interface with destructuring (best way!)
class CreateCourseService {
  execute({ name, duration = 10, educator }: Course) {
    console.log(name, duration, educator);
  }
}

export default new CreateCourseService();
