/**
 * 타입 단언
 */
type Person = {
  name: string;
  age: number;
};

type Dog = {
  name: string;
  color: string;
};

//미리 person 객체로 선언하고 나중에 데이타 를 넣고 싶을때는  최기화 값을 단헌해주면 된다. as
let person = {} as Person;
person.name = "최경호";
person.age = 27;

let person2: Person = {
  name: "최인호",
  age: 33,
};

let dog: Dog = {
  name: "돌돌이",
  color: "brown",
  breed: "진도", //breed 는 사용하고 싶으면 as 단언을 해주면 된다.
} as Dog;

let num3: number = 6;

/**
 * Non Null 단언
 */

type Post = {
  title: string;
  author?: string;
};

let post: Post = {
  title: "게시글",
  author: "최경호",
};

// const len: number = post.author?.length; //
const len: number = post.author!.length; // null 아니다라고 ! 를 넣으면 오류 안남
console.log(len);
