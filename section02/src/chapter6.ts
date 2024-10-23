//any
//특정 변수의 타입을 우리가 확실히 모를때

let anyVar : any =10;
anyVar ="어떤타입이던지 넣을수 있음";

let num : number =10;
num = anyVar; //자유롭게 넣을수 있음

//값이 뭐던 함수를 사용할수 있다.(실제는 오류 발생함)
anyVar.toUpperCase();
anyVar.toFixed(); 


//unknown 
//any 비슷하지만 넣을 수 없게 있다.
//unknown 형식은 any type 과 다르게 변수에 넣을수 없습니다.

let unknownVar : unknown;
unknownVar ="";
unknownVar = 1;
unknownVar = ()=>{};
unknownVar = null;

//unknownVar.toUpperCase(); any와 다르게 사용불가
//num = unknownVar; //unknown 형식은 any type 과 다르게 넣을수 없습니다.
if(typeof unknownVar === "number"){ //타입체크를 하고는 넣을 수있다.
    num = unknownVar ; 
}