
type User ={
    id: number,
    name : string,
    nickname :string,
    birth? : string,

};

let user : User ={
    id : 1,
    name : "최경호",
    nickname : "아부이",
    //birth : "2024-12-01"
};

let user2 : User ={
    id : 1,
    name : "박광연",
    nickname : "똘똘이",
    birth : "2024-12-01"
};


//인덱스 시그니처 타입 (type scrip에서만  사용) - 규칙을 이용해서 가능함
type CountryCode ={
    [key:string ] : string;
}
let countryCodes :CountryCode ={
    Korea : "ko",
    UnitedState :"us",
    UnitedKingdom :"uk",
}

type CountryNumberCodes ={
    [key:string] : number;
    Korea : number; // 필수로 가져야 하게 설정할수 있음
}

let countryNumberCodes : CountryNumberCodes  ={
    Korea :410, //--> 필수 
    UnitedState :123,
    UnitedKingdom : 1818,
};
