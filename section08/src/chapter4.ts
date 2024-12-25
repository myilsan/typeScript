/**
 * 템플릿 리터럴 타입(석여있는 타입을 리터럴로 정의해서사용하는 방법)
 */

type Color = "red" | "black" | "green";
type Animal = "dog" | "cat" | "chicken";

//color와 animal 같이 있는 탑입을 만들경우
type Color_Animal = "red-dog" | "red-cat" | "red-chicken";
type Color_Animal2 = `${Color}-${Animal}`; // 위처럼 만들지 않아도 된다.

const coloredAnimal: Color_Animal2 = "red-dog";
