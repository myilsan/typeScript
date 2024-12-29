//void
//가무것도 없다는 타입

function fun1(): string {
  return "hello";
}

function func2(): void {
  console.log("hello");
}

let a: void;
//a = 1;
//a = "";
//a = {}
a = undefined; // void 는 undefined 만 담을수 있다.
//a = null; tsconfig.json 파일에서 stricNullChecks : false 로 해주면 null 허용됨

//never --> 존재하지 않는
//불가능 타입
//정성적으로 종료될수 없어서 종료되는게 반화값이 있는게 모순이다, 일때 never를 쓴다
//어떤값도 저장할수 없는 타입
function func3(): never {
  while (true) {}
}

function func4(): never {
  // error 나 모순을 정의 할때
  throw new Error();
}

let a2: never; // 어떤 값도 할당 할 수 없다
//a2=1;
//a2={};
//a2="";
//a2 = undefined;
//a2 = null; //tsconfig.json 파일에서 stricNullChecks : false 해 줘도 어떤값도 저장 할수 있다.
