//객체 타입 리터럴 타입(구조적 타입시스템)

let user: {
  id: number;
  name: string;
} = {
  id: 1,
  name: "최경호",
};
//접근 방식 및 변경방법
user.id = 3;

console.log(user.name);
//$ tsx src/chapter3.ts

let dog: {
  name?: string;
  color: string;
} = {
  //name: "탄이",
  color: "brown",
};

let config: {
  readonly apiKey: string;
} = {
  apiKey: "myApi_Key",
};

//config.apiKey ="hack_key";  // readonly로 읽기전용 설정

type User2 = {
  id: number;
  name: string;
};

let user2: User2 = {
  id: 1,
  name: "반가웡",
};

console.log(user2);
