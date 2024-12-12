/**
 * 접근 제어자
 * public : 언제어디서나 접근가능
 * private : 클레스 안에서만 접근가능
 * protected : 파생클래스 만 접근가능
 */
class Employee {
  //필드
  public name: string;
  public age: number;
  public position: string;

  constructor(name: string, age: number, position: string) {
    this.name = name;
    this.age = age;
    this.position = position;
  }

  work() {
    console.log("일함");
  }
}
//아래와 같이 생성자(constructor)에 접근제어자 까 앞에 써주면 멤버를 선언 하지 않아도 된다.
class Employee2 {
  constructor(
    public name: string,
    public age: number,
    public position: string
  ) {
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

const employee = new Employee("최경호", 30, "developer");
employee.name = "홍길동";
employee.age = 25;
employee.position = "디자이너";

const employee2 = new Employee2("최경호", 30, "developer");
employee2.name = "홍길동";
employee2.age = 25;
employee2.position = "디자이너";

console.log(employee2);
