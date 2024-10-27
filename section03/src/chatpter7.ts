/**
 * 타입 좁하기
 * 조건문 등을 이용해 넓은타입에서 좁은타입으로
 * 타입을 상황에 따라 좁히는 방법을 이야기
 */

type Person = {
  name: string;
  age: number;
};

//value ==> number:toFixed
//value ==> string : toUpperCase\
//value ==>Date :getTime
function func(value: number | string | Date | null | Person) {
  if (typeof value === "number") {
    console.log(value.toFixed());
  } else if (typeof value === "string") {
    console.log(value.toUpperCase());
    // } else if (typeof value === "object") {
    //     console.log(value.getTime()); // null 인경우 오류가 발생함
  } else if (value instanceof Date) {
    // instanceof 를 이용하면 해결된다.(Date 를 보장하기때문)
    // instanceof 뒤에는 객체만 비교됨.
    console.log(value.getTime());
  } else if (value && "age" in value) {
    //value 값이 있을때에만 사용하도록 && 사용
    console.log(`${value.name}은 ${value.age}살 입니다.`);
  }
}
