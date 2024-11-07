/**
 * js 클래스
 */

// 객체는여러명의 사용자를 관리하려면  여러개를 만들어야 함.
let studentA = {
  name: "최경호",
  grade: "A++",
  study() {
    console.log("열심히 공부함");
  },
  introduce() {
    console.log("안녕하세요");
  },
};

let studentB = {
  name: "박진영",
  grade: "B++",
  study() {
    console.log("열심히 공부함");
  },
  introduce() {
    console.log("안녕안해요");
  },
};

//class 는 객체를 만들어내는 틀 이라고 생각하면 됨.
class Student {
  //필드
  name;
  grade;
  age;

  //생성자
  constructor(name, grade, age) {
    this.name = name;
    this.grade = grade;
    this.age = age;
  }
  //메서드
  study() {
    console.log("열심히 공부함");
  }
  introduce() {
    console.log(`안녕 안해요 ${this.name} 입니다`);
  }
}

class StudentDeveloper extends Student {
  //필드
  //name;
  //grade;
  //age;
  favariteSkill;

  //생성자
  constructor(name, grade, age, favariteSkill) {
    super(name, grade, age);
    this.favariteSkill = favariteSkill;
  }
  programming() {
    console.log(`${this.favariteSkill}로 프로그램 함`);
  }
}

let studentBB = new Student("최경호", "A++", 27);
console.log(studentBB); //Student { name: '최경호', grade: 'A++', age: 27 }
studentBB.study(); //열심히 공부함
studentBB.introduce(); //안녕 안해요 최경호 입니다

const studentDeveloper = new StudentDeveloper(
  "박진영",
  "B++",
  27,
  "TypeScript"
);

console.log(studentDeveloper);
/**
 * StudentDeveloper {
  name: '박진영',
  grade: 'B++',
  age: 27,
  favariteSkill: 'TypeScript'
}
 */
studentDeveloper.programming(); //TypeScript로 프로그램 함
