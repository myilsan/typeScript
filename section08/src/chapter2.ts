/**
 * keyof 연산자
 */

interface Person {
  name: string;
  age: number;
}

// key 값이 name, age  아닌경우 도 들어올수 있는 문제점
function getPropertyKey(person: Person, key: string) {
  //union 쓸수 있다 , 추가 될시 비효휼 적이다.
  //return person[key]; // 오류 발생함.
}

//name, age 새로운 프로퍼티 추가 되었을때   function key 값도 추가 해줘야 하는 문제점 발생
function getPropertyKey1(person: Person, key: "name" | "age") {
  //union 쓸수 있다 , 추가 될시 비효휼 적이다.
  return person[key];
}

//keyof로 할경우 해결됨( 프로퍼티가 추가되어도 자동의 union 타입으로 추출됨)
function getPropertyKey2(person: Person, key: keyof Person) {
  //union 쓸수 있다 , 추가 될시 비효휼 적이다.
  return person[key];
}

const person: Person = {
  name: "최경호",
  age: 30,
};

getPropertyKey(person, "name"); //최경호
getPropertyKey1(person, "name"); //최경호
getPropertyKey2(person, "age"); //30

//typeof 는 기존 타입을 string 으로 반환하는 연산자 였다
//typeof person === "object";

//keyof 연산자 2번째 사용케이스 방법
/**
 * 객차 타입으로 부터 프로퍼티 key들을 뽑아와서 union type으로 만들어 추론으로 keyof연산자로  할수 있다.
 */
type Person2 = typeof person2;
function getPropertyKey3(person2: Person2, key: keyof typeof person2) {
  //추론한대로  뽑힌다 .
  //union 쓸수 있다 , 추가 될시 비효휼 적이다.
  return person2[key];
}

const person2 = {
  name: "박광연",
  age: 27,
  sex: "string",
};
getPropertyKey3(person2, "name"); //박광연
