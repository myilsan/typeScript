
//배열 
let numArr : number [] =[1,2,3];
let strArr : Array<string> =["강아지","강","","바다"];

//다중배열
let multiArr : (string | number)[] = [1,"hello","바다",230000];

//다차원 배열 
let  doubleArr : number[][]= [
    [1,2,3],
    [1,3,4]
];

//튜플타입 (type script 에서만 제공함.)
let tup1 : [number,number] = [1,3];
let tup2 :[number, string, boolean] = [1,"대한민국",true];

const users : [string, number][] = [
    ["최경호",1],
    ["박광연",2],
    ["안경은",3],
    //[4,"김정민"],

]
