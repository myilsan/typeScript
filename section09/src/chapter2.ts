/**
 * 분산적인 조건부 타입
 */

type StringNumberSwitch<T> = T extends number ? string : number;

let a: StringNumberSwitch<number>;
let b: StringNumberSwitch<string>;

let c: StringNumberSwitch<number | string>;
//각각 한번씩 분리가 되어 union 된다.
//StringNumberSwitch<number> |  --> string
//StringNumberSwitch<string>  --> number;
//결과 : string | number

let d: StringNumberSwitch<boolean | number | string>;

//분리되어
//number | string | number
//결과 : number |string

/** 실용적인 예제 조건부 타입 */

type Exclude<T, U> = T extends U ? never : T;

type A = Exclude<number | string | boolean, string>;

//number
//never
//boolean

//결과
//number | boolean
