/**
 * 조건부 타입
 */

type A = number extends string ? string : number;

type ObjA = {
  //슈퍼타입
  a: number;
};

type ObjB = {
  a: number;
  b: number;
};

//ObjB  확장하냐 ObjA type 을 ?
type B = ObjB extends ObjA ? number : string;

/**
 *
 * 제네닉과 조건타입 때 사용이 된다.
 * 제네릭에 string 타입이 오면 number 타입으로 하고  , number 타입이 오면 string 타입으로 변환하기
 */

let varA: StringNumberSwitch<number>;
let varB: StringNumberSwitch<string>;

type StringNumberSwitch<T> = T extends number ? string : number;

function removeSpaces<T>(text: T): T extends string ? string : undefined;
function removeSpaces(text: any) {
  if (typeof text === "string") {
    return text.replaceAll(" ", "");
  } else {
    return undefined;
  }
}

let result = removeSpaces("hi im winterlood");
result.toUpperCase();
