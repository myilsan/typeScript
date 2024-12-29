/**
 * infer (추론하는 )
 *  inference --> 추론하다
 */

type FuncA = () => string;
type FuncB = () => number;

//type ReturnType<T> = T extends () => string ? string : never;

type ReturnType<T> = T extends () => infer R ? R : never; // R이 참이되게 만든다...

type A = ReturnType<FuncA>;
type B = ReturnType<FuncB>;

type C = ReturnType<number>; // 추론 할수 없다,
