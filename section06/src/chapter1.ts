/**
 * 타입스크립트 클래스
 */

class Employee {
  name: string;
  age: number;
  position: string;

  constructor(name: string, age: number, position: string) {
    this.name = name;
    this.age = age;
    this.position = position;
  }

  work() {
    console.log("일함");
  }
}

class ExecutiveOfficer extends Employee {
  //상속받도록
  //필드
  officeNUmber: number;

  //생성자
  constructor(
    name: string,
    age: number,
    position: string,
    officeNUmber: number
  ) {
    super(name, age, position);
    this.officeNUmber = officeNUmber;
  }
}

const employeeB = new Employee("최경호", 27, "개발자");
console.log(employeeB);
employeeB.work();

//type script class 는 타입으로도 활용이 된다.(ts 는 구조적으로 결정하기때문이다.)
const employeeC: Employee = {
  name: "",
  age: 0,
  position: "",
  work() {},
};
