/**
 * 제네릭
 * 제너럴 호스피탈(종합병원)
 */

function func<T>(value: T): T {
  return value;
}

let num = func(10);
//num.toUpperCase();

let bool = func(true);
let str = func("string");
str.toUpperCase();

let arr = func([1, "문자", 3]);
let arr2 = func<[number, string, number]>([1, "문자", 3]);
