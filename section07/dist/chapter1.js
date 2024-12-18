/**
 * 첫번째 사례
 */
//타입을 여러개를 사용이 가능하다.
function swap(a, b) {
    return [b, a];
}
const [a, b] = swap("1", 3);
/**
 * 두번째 변수
 */
function returnFirstValue(data) {
    return data[0];
}
let num = returnFirstValue([1, "hello", "mynameis"]);
/**
 * 세번째 사례
 */
//number type 의 length가 있는 값만 전달할수 있도록 한다.
function getLength(data) {
    return data.length;
}
let var1 = getLength([1, 2, 3]); //3
let var2 = getLength("1234"); //4
let var3 = getLength({ length: 10 }); //10
export {};
//let var4 = getLength(10); //불가
