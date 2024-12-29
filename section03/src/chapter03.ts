/**
 * Unknown 타입( 모든타입의 슈퍼 타입)
 */

// Unknown type은 모든타입의 슈퍼 타입이므로 다 넣을 수 있음
function unknownExam() {
  //업 케스팅은 됨
  let a: unknown = 1;
  let b: unknown = "hello";
  let c: unknown = true;
  let d: unknown = null;
  let e: unknown = undefined;

  //다운케스팅은 안됨.
  let unKnownVar: unknown;

  //   let num: number = unKnownVar; // 할당할수 없음
  //   let str: string = unKnownVar; // 할당할수 없음
  //   let bool: boolean = unKnownVar; // 할당할수 없음
}

/**
 *  Naver 타입 (가장 아래에 있음 (모든타입의 서브타입)) --> 공집합
 */

function neverExam() {
  function naverFunc(): never {
    //이함수가 반환 하는 값은 공집합..(아무것도 없다)
    while (true) {}
  }
  // 업 케이스팅 이기때문에 넣을 있다.
  let num: number = naverFunc();
  let num2: string = naverFunc();
  let num3: boolean = naverFunc();

  //다운케스트 이기때문에 오류가 된다. (아무런 값도 저장을 할수 없다)
  //   let never1: never = 10;
  //   let never2: never = "hello";
  //   let never3: never = true;
}

function anyExam() {
  let unknownVar: unknown;
  let anyVar: any;
  let undefinedVar: undefined;
  let neverVar: never;
  //unknown , any 타입은 업케스팅 다운케스팅을 무시한다.(위험한 타입이다.)

  anyVar = unknownVar; // 다운케스팅 됬음에도 오류가 나지않음
  undefinedVar = anyVar; // 디운케스팅 되었음

  //neverVar = anyVar; // never type 까진 다운케스팅 할수는 없다.(이것만 안됨)
}
