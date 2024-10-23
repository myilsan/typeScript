//void 
//가무것도 없다는 타입

function fun1() : string {
    return "hello";
}

function func2() : void{
    console.log("hello");

}

//never --> 존재하지 않는 
//불가능 타입
//정성적으로 종료될수 없어서 종료되는게 반화값이 있는게 모순이다 
//어떤값도 저장할수 없는 타입
function func3() : never{
    while(true){}
}

function func4() : never {
    throw new Error();
}

let a: never;  // 어떤 값도 할당 할 수 없다
//a=1;
//a={};
//a="";
//a = undefined;
//a = null;
